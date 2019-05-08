"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipeIngredient = sequelize.define(
    "RecipeIngredient",
    {
      recipesId: DataTypes.INTEGER,
      content: DataTypes.TEXT
    },
    {
      timestamps: true
    }
  );
  RecipeIngredient.associate = function(models) {
    // associations can be defined here
  };
  return RecipeIngredient;
};
