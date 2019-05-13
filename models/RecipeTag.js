"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipeTag = sequelize.define(
    "RecipeTag",
    {
      recipesId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  RecipeTag.associate = function(models) {
    models.RecipeTag.hasOne(models.Tag, {
      foreignKey: "recipesId",
      sourceKey: "id"
    });
  };
  return RecipeTag;
};
