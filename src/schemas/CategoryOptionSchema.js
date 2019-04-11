'use strict';

export default

`type CategoryOption {
                 id: ID
           category: Category
               name: String
  
    
       
}

type Query {

   
             categoryOption(id: ID!): CategoryOption
    categoryOptions(categoryId: ID!): [CategoryOption]
                     
}`