'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserOption', {

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
       
      categoryOptionId:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false,
        onDelete: 'CASCADE',
        references:{
          model: 'CategoryOption',
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
    return queryInterface.dropTable('UserOption');
  }
};