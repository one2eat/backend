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
    // associations can be defined here
  };
  return Restaurant;
};
