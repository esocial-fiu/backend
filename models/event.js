'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title:{
      type:  DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    location:{
      type: DataTypes.STRING,
      allowNull: false
    } ,
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    maxAmountOfPeople: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  
  },
  {
    freezeTableName: true
  });
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.User,{
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    Event.belongsToMany(models.User, {
      through: 'EventAttendee',
      foreighKey: 'eventId',
      onDelete: 'CASCADE'
    });
 
  };
  return Event;
};