"use strict";
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define(
    "Restaurant",
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      address: DataTypes.TEXT,
      phoneNumber: DataTypes.STRING
    },
    {
      timestamps: true
    }
  );

  Restaurant.associate = function(models) {
    models.Restaurant.hasOne(models.RestaurantTime, {
      foreignKey: "restaurantsId",
      sourceKey: "id"
    });
  };
  return Restaurant;
};
