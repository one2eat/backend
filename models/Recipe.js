"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING
    },
    {
      timestamps: true
    }
  );
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};
