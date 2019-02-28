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
}`