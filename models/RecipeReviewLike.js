"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipeReviewLike = sequelize.define(
    "RecipeReviewLike",
    {
      idUser: DataTypes.INTEGER,
      idRecipesReview: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  RecipeReviewLike.associate = function(models) {
    // associations can be defined here
  };
  return RecipeReviewLike;
};
