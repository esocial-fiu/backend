'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('User', 
        [
          {
            firstName:'Alejandro',
            lastName:'Perez', 
            sex:'M',
            birthday:'12/31/2000',
            email:'email1@example.com',
            password:'111',
            createdAt:new Date(),
            updatedAt: new Date()          
          },
          {
            
            firstName:'Enzo',
            lastName:'Mendoza', 
            sex:'M',
            birthday:'12/31/2000',
            email:'email2@example.com',
            password:'222',
            createdAt:new Date(),
            updatedAt: new Date()  
      

          },
          {
            
            firstName:'Franck',
            lastName:'Laguerre', 
            sex:'M',
            birthday:'12/31/2000',
            email:'email3@example.com',
            password:'333',
            createdAt:new Date(),
            updatedAt: new Date()  
         
          },
          {
            
            firstName:'Vicente',
            lastName:'Last Name', 
            sex:'M',
            birthday:'12/31/2000',
            email:'email4@example.com',
            password:'444',
            createdAt:new Date(),
            updatedAt: new Date()  
          
          }
       ] , {});  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('User', null, {});
  }
};
