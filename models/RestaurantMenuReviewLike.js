"use strict";
module.exports = (sequelize, DataTypes) => {
  const RestaurantMenuReviewLike = sequelize.define(
    "RestaurantMenuReviewLike",
    {
      userId: DataTypes.INTEGER,
      restaurantMenuReviewId: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  RestaurantMenuReviewLike.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantMenuReviewLike;
};
