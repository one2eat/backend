"use strict";
module.exports = (sequelize, DataTypes) => {
  const RestaurantMenu = sequelize.define(
    "RestaurantMenu",
    {
      restaurantId: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE
    },
    {
      timestamps: true
    }
  );
  RestaurantMenu.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantMenu;
};
