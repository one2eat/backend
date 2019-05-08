'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipesStep = sequelize.define('RecipesStep', {
    name: DataTypes.STRING
  }, {});
  RecipesStep.associate = function(models) {
    // associations can be defined here
  };
  return RecipesStep;
};