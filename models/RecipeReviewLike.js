'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipeReviewLike = sequelize.define('RecipeReviewLike', {
    name: DataTypes.STRING
  }, {});
  RecipeReviewLike.associate = function(models) {
    // associations can be defined here
  };
  return RecipeReviewLike;
};