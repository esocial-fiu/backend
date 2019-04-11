'use strict';

export default

`type Category {
                  id: ID
                name: String
     categoryOptions: [CategoryOption]
}

type Query {
     category(id: ID!): Category
            categories: [Category]
}`