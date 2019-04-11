'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('UserOption', [
        {
          userId: 1,
          categoryOptionId:3,
          createdAt:new Date(),
          updatedAt: new Date() 
        },

        {
          userId: 1,
          categoryOptionId:5,
          createdAt:new Date(),
          updatedAt: new Date() 
        },
        {
          userId: 2,
          categoryOptionId:3,
          createdAt:new Date(),
          updatedAt: new Date() 
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('UserOption', null, {});
    
  }
};
