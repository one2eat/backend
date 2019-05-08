'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipeStep = sequelize.define('RecipeStep', {
    name: DataTypes.STRING
  }, {});
  RecipeStep.associate = function(models) {
    // associations can be defined here
  };
  return RecipeStep;
};