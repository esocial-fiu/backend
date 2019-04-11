'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sex: {
      type: DataTypes.ENUM("M", "F", "O"),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull:true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },   
  },
  {
    freezeTableName: true
  });
  
  User.associate = function(models) {
  // associations can be defined here
  User.belongsToMany(models.CategoryOption, {
    through: 'UserOption',
    foreighKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  User.hasMany(models.Event,{
    foreignKey: 'userId',
    as:'User',
  });

  User.belongsToMany(models.Event, {
    through: 'EventAttendee',
    foreighKey: 'userId',
    onDelete: 'CASCADE'
  });
    
  };
  return User;
};