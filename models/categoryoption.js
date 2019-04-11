'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryOption = sequelize.define('CategoryOption', {
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
  CategoryOption.associate = function(models) {
    // associations can be defined here
    CategoryOption.belongsTo(models.Category,{
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });

    CategoryOption.belongsToMany(models.User, {
      through: 'UserOption',
      foreighKey: 'categoryOptionId',
      onDelete: 'CASCADE'
    });
   
  };
  return CategoryOption;
};