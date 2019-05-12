"use strict";
module.exports = (sequelize, DataTypes) => {
  const RestaurantMenuReview = sequelize.define(
    "RestaurantMenuReview",
    {
      userId: DataTypes.INTEGER,
      restaurantMenuId: DataTypes.INTEGER,
      content: DataTypes.TEXT
    },
    {
      timestamps: true
    }
  );
  RestaurantMenuReview.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantMenuReview;
};
