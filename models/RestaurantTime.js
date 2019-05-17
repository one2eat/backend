"use strict";
module.exports = (sequelize, DataTypes) => {
  const RestaurantTime = sequelize.define(
    "RestaurantTime",
    {
      restaurantsId: DataTypes.INTEGER,
      openTime: DataTypes.STRING,
      closeTime: DataTypes.STRING
    },
    {
      timestamps: true
    }
  );
  RestaurantTime.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantTime;
};
