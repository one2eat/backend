'use strict';
module.exports = (sequelize, DataTypes) => {
  const RestaurantMenu = sequelize.define('RestaurantMenu', {
    name: DataTypes.STRING
  }, {});
  RestaurantMenu.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantMenu;
};