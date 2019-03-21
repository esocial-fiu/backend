'use strict';

export default

`type Event {
    id: ID!
    title: String!
    description: String!
    location: String!
    date: String!
    createdBy: User!
    attendees: [User]!
    maxAmountOfPeople: Int!
}

type Query {
    event(id: ID!): Event,
    events: [Event]!,
}

type Mutation {
    eventRSVP(userId: ID!, eventId: ID!): Event!
}
`