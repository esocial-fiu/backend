'use strict';

export default

`type Event {
                   id: ID
                title: String
          description: String
             location: String
                 date: String
            createdBy: User
            attendees: [User]
    maxAmountOfPeople: Int
}

type Query {
      event(id: ID!): Event
        events: [Event]
}

type Mutation {
    cancelEvent(id: ID!): Event

    createEvent(
                    title: String,
              description: String,
                 location: String,
                     date: String,
                createdBy: ID,
        maxAmountOfPeople: Int
    ): Event!

      eventRSVP(userId: ID!, eventId: ID!): Event
    eventUnRSVP(userId: ID!, eventId: ID!): Event
}
`