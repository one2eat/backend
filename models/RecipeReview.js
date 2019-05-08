'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipeReview = sequelize.define('RecipeReview', {
    name: DataTypes.STRING
  }, {});
  RecipeReview.associate = function(models) {
    // associations can be defined here
  };
  return RecipeReview;
};