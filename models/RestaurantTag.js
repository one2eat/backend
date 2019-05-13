"use strict";
module.exports = (sequelize, DataTypes) => {
  const RestaurantTag = sequelize.define(
    "RestaurantTag",
    {
      restaurantId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  RestaurantTag.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantTag;
};
