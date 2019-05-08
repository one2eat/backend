"use strict";
module.exports = (sequelize, DataTypes) => {
  const RestaurantReview = sequelize.define(
    "RestaurantReview",
    {
      restaurantId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      stars: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  RestaurantReview.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantReview;
};
