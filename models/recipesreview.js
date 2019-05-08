'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipesReview = sequelize.define('RecipesReview', {
    name: DataTypes.STRING
  }, {});
  RecipesReview.associate = function(models) {
    // associations can be defined here
  };
  return RecipesReview;
};