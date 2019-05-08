'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipesIngredients = sequelize.define('RecipesIngredients', {
    name: DataTypes.STRING
  }, {});
  RecipesIngredients.associate = function(models) {
    // associations can be defined here
  };
  return RecipesIngredients;
};