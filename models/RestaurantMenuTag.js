"use strict";
module.exports = (sequelize, DataTypes) => {
  const RestaurantMenuTag = sequelize.define(
    "RestaurantMenuTag",
    {
      restaurantMenuId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  RestaurantMenuTag.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantMenuTag;
};
