'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    createdBy: DataTypes.INTEGER,
    maxAmountOfPeople: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};