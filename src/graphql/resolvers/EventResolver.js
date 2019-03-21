import _ from "lodash"
import events from "./../../data/events"
import users from "./../../data/users"

export default {
    Query: {
        event(parent, args, context, info) {
            return _.find(events, {id: Number(args.id)});
        },
        events(parent, args, context, info) {
            return events;
        },
    },
    Mutation: {
        cancelEvent(obj, args, context, info) {
            let index = -1;
            let deletedEvent = null;

            _.forEach(events, (event, i) => {
                if(event.id === Number(args.id))
                {
                    index = i;
                    deletedEvent = event;
                }
            });

            if(index > -1)
                events.splice(index, 1);

            return deletedEvent;
        },
        createEvent(obj, args, context, info) {
            const newEvent = {
                id: (_.last(events)).id + 1,
                title: args.title,
                description: args.description,
                location: args.location,
                date: args.date,
                createdBy: Number(args.createdBy),
                attendees: [Number(args.createdBy)],
                maxAmountOfPeople: Number(args.maxAmountOfPeople),
            };

            events.push(newEvent);

            return newEvent;
        },
        eventRSVP(obj, args, context, info) {
            const user = _.find(users, {id: Number(args.userId)});

            if(!user)
                throw new Error("Invalid user provided.");

            const event = _.find(events, {id: Number(args.eventId)});

            if(!event)
                throw new Error("Invalid event provided.");

            if(event.attendees.length >= event.maxAmountOfPeople)
                throw new Error("Sorry this event has already reached the maximum amount of people it allows.");

            event.attendees.push(user.id);

            return event;
        },
        eventUnRSVP(obj, args, context, info) {
            const event = _.find(events, {id: Number(args.eventId)});

            if(!event)
                throw new Error("Invalid event provided.");

            _.remove(event.attendees, (attendee) => { return attendee === Number(args.userId); });

            return event;
        }
    },
    Event: {
        createdBy(event) {
            return _.find(users, {id: event.createdBy});
        },
        attendees(event) {
            return _.filter(users, (user) => { return event.attendees.indexOf(user.id) > -1 });
        }
    }
}