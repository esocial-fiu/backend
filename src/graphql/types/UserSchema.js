'use strict';

export default

`type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    birthday: String!
    sex: String!
    categoryOptions: [CategoryOption]!
}

type Query {
    me: User!
}

type Mutation {
    # Use username: "admin" and password: "admin" to get a valid user
    userLogin(username: String!, password: String!): User
}
`