'use strict';
module.exports = (sequelize, DataTypes) => {
  const RestaurantReviewLike = sequelize.define('RestaurantReviewLike', {
    name: DataTypes.STRING
  }, {});
  RestaurantReviewLike.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantReviewLike;
};