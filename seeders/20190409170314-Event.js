'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Event', [
        {

          title: "Study Group",
          description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          location: "FIU Green Library",
          date: '12/31/2000',
          userId: 2,
          maxAmountOfPeople: 20,
          createdAt:new Date(),
          updatedAt: new Date()
        },
        {
          title: "Basket Ball Game",
          description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          location: "FIU Green Library",
          date: '12/31/2005',
          userId: 1,
          maxAmountOfPeople: 25,
          createdAt:new Date(),
          updatedAt: new Date()

        },
        {
          title: "Study Group",
          description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          location: "FIU Green Library",
          date: '08/31/2000',
          userId: 3,
          maxAmountOfPeople: 26,
          createdAt:new Date(),
          updatedAt: new Date()
        },
        {
          title: "Study Group",
          description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          location: "FIU Green Library",
          date: '12/25/2000',
          userId: 4,
          maxAmountOfPeople: 15,
          createdAt:new Date(),
          updatedAt: new Date()
        },
        {
          title: "Study Group",
          description: "look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          location: "FIU Green Library",
          date: '12/18/2000',
          userId: 1,
          maxAmountOfPeople: 10,
          createdAt:new Date(),
          updatedAt: new Date()
        }

    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Event', null, {});
  }
};
