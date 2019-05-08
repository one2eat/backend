"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipeIngredient = sequelize.define(
    "RecipeIngredient",
    {
      name: DataTypes.STRING
    },
    {}
  );
  RecipeIngredient.associate = function(models) {
    // associations can be defined here
  };
  return RecipeIngredient;
};
