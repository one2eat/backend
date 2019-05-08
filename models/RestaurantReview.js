'use strict';
module.exports = (sequelize, DataTypes) => {
  const RestaurantReview = sequelize.define('RestaurantReview', {
    name: DataTypes.STRING
  }, {});
  RestaurantReview.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantReview;
};