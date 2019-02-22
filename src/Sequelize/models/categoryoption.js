'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryOption = sequelize.define('CategoryOption', {
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  CategoryOption.associate = function(models) {
    // associations can be defined here
  };
  return CategoryOption;
};