'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipesReviewLike = sequelize.define('RecipesReviewLike', {
    name: DataTypes.STRING
  }, {});
  RecipesReviewLike.associate = function(models) {
    // associations can be defined here
  };
  return RecipesReviewLike;
};