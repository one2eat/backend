"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipeStep = sequelize.define(
    "RecipeStep",
    {
      recipesId: DataTypes.INTEGER,
      step: DataTypes.INTEGER,
      content: DataTypes.TEXT
    },
    {
      timestamps: true
    }
  );
  RecipeStep.associate = function(models) {
    // associations can be defined here
  };
  return RecipeStep;
};
