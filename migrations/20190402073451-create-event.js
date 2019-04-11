'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Event', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      userId:{
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'User',
          key: 'id',
          as: 'userId'
        },
        allowNull: false
      }, 
      title:{
        type:  Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      location:{
        type: Sequelize.STRING,
        allowNull: false
      } ,
      date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      maxAmountOfPeople: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    return queryInterface.dropTable('Event');
  }
};