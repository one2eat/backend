'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    name: DataTypes.STRING
  }, {});

  Recipes.associate = (models) => {
    // associations can be defined here
  };

  return Recipes;
};