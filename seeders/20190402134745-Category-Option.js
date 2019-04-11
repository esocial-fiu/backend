'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('CategoryOption',
       [
          {
            categoryId: 1,
            name:'coding', 
            createdAt:new Date(),
            updatedAt: new Date()           
          },

          {
            categoryId: 1,
            name:'Roller Skating',
            createdAt:new Date(),
            updatedAt: new Date()          
          },
          {
            categoryId: 2,
            name:'Soccer',
            createdAt:new Date(),
            updatedAt: new Date()  
          },
          {
            categoryId: 2,
            name:'Volley Ball',
            createdAt:new Date(),
            updatedAt: new Date()  
          },
          {
            categoryId: 3,
            name:'Mathematics',
            createdAt:new Date(),
            updatedAt: new Date()  
          },
          {
            categoryId: 3,
            name:'Programming',
            createdAt:new Date(),
            updatedAt: new Date()  
          }
      ], {});
  
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('CategoryOption', null, {});
    
  }
};
