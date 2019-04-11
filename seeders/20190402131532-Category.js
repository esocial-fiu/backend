'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Category',
       [
          {
            name: 'Hobbies',
            createdAt:new Date(),
            updatedAt: new Date()  
          
          },
          {
            name:'Sports',
            createdAt:new Date(),
            updatedAt: new Date()  
         
          },
          {
            name:'School Subjects',
            createdAt:new Date(),
            updatedAt: new Date()  
            
          }
       ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Category', null, {});
    
  }
};
