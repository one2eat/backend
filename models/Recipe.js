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
  Recipe.associate = models => {
    models.Recipe.hasMany(models.RecipeIngredient, {
      foreignKey: "recipesId",
      sourceKey: "id"
    });

    models.Recipe.hasMany(models.RecipeStep, {
      foreignKey: "recipesId",
      sourceKey: "id"
    });
  };

  return Recipe;
};
