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
      foreignKey: "id",
      sourceKey: "recipesId"
    });

    // models.RecipeTag.belongsTo(models.Tag, {});
  };
  return RecipeTag;
};
