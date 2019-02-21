'use strict';

export default

`type Category {
    id: ID!
    name: String!
}

type Query {
    category(id: ID!): Category,
    categories: [Category]!,
}`