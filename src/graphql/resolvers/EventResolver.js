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
    Event: {
        createdBy(event) {
            return _.find(users, {id: event.createdBy});
        },
        attendees(event) {
            return _.filter(users, (user) => { return event.attendees.indexOf(user.id) > -1 });
        }
    }
}