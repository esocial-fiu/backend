'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserOption = sequelize.define('UserOption', {
    userId:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        onDelete: 'CASCADE'
    }, 
    categoryOptionId:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        onDelete: 'CASCADE'
      }
  },
  {
    freezeTableName: true
  });
  
  UserOption.associate = function(models) {
  // associations can be defined here
    
  };
  return UserOption;
};