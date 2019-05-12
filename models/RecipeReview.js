"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipeReview = sequelize.define(
    "RecipeReview",
    {
      recipesId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      stars: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  RecipeReview.associate = function(models) {
    // associations can be defined here
  };
  return RecipeReview;
};
