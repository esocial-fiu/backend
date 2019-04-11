'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventAttendee', {
        userId:{
          type: Sequelize.INTEGER,
          primaryKey:true,
          allowNull: false,
          onDelete: 'CASCADE',
          references:{
            model:'User',
            key:'id' 
          } 
        }, 
        eventId:{
          type: Sequelize.INTEGER,
          primaryKey:true,
          allowNull: false,
          onDelete: 'CASCADE',
          references:{
            model: 'Event',
            key: 'id'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EventAttendee');
  }
};