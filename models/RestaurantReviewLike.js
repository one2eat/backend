"use strict";
module.exports = (sequelize, DataTypes) => {
  const RestaurantReviewLike = sequelize.define(
    "RestaurantReviewLike",
    {
      idUser: DataTypes.INTEGER,
      idRecipesReview: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  RestaurantReviewLike.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantReviewLike;
};
