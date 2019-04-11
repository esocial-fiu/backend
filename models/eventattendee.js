'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventAttendee = sequelize.define('EventAttendee', {
    userId:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false,
      onDelete: 'CASCADE',
  }, 
  eventId:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false,
      onDelete: 'CASCADE'
    }
   
  },
  {
    freezeTableName: true
  });
  EventAttendee.associate = function(models) {
    // associations can be defined here
   

  };
  return EventAttendee;
};