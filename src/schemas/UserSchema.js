'use strict';

export default

`type User {
                 id: ID!
          firstName: String
           lastName: String
              email: String
           birthday: String
                sex: String
           password: String
    categoryOptions: [CategoryOption]
}

type Query {
                           users: [User]
                              me: User
                   user(id: ID!): User
        userOptions(userId: ID!): [CategoryOption]
}

type Mutation {
    
                  userLogin(username: String!, password: String!): User
                 userRegister(userId: ID!, categoryOptionId: ID!): User
      userUpdate(userId: ID!, oldOptionId: ID!, newOptionId: ID!): User
}
`