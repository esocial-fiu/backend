import _ from "lodash"
import events from "./../../data/events"
import users from "./../../data/users"

export default {
    Query: {
        event(parent, args, context, info) {
            return _.find(events, {id: args.id});
        },
        events(parent, args, context, info) {
            return events;
        },
    },
    Mutation: {
        eventRSVP(obj, args, context, info) {
            const user = _.find(users, {id: Number(args.userId)});

            if(!user)
                throw new Error("Invalid user provided.");

            const event = _.find(events, {id: Number(args.eventId)});

            if(!event)
                throw new Error("Invalid event provided.");

            event.attendees.push(user.id);

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