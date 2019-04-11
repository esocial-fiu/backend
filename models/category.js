'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
 
  },
  {
    freezeTableName: true
  });
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.CategoryOption,{
      foreignKey: 'categoryId',
      as:'Category',
    });
  };
  return Category;
};