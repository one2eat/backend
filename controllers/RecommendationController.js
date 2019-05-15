const { sequelize, Sequelize } = require("../models");

const getRecipesRecommendation = async (req, res) => {
  try {
    const rawQuery = `
    SELECT
      Recipes.id,
      Recipes.\`name\`,
      COUNT(RecipeReviews.stars)*RecipeReviews.stars/COUNT(RecipeReviews.stars) as reviewCount
    FROM
      Recipes
    LEFT JOIN RecipeReviews
      ON Recipes.id = one2eat_dev.RecipeReviews.recipesId
    GROUP BY Recipes.id
    ORDER BY reviewCount DESC, COUNT(RecipeReviews.stars) DESC LIMIT 10  
  `;

    const query = await sequelize.query(rawQuery, {
      type: Sequelize.QueryTypes.SELECT
    });

    res.send({
      message: "Successfully Getting Recipes Recommendation",
      data: query
    });
  } catch (e) {
    res.status(500).send({
      message: `There's an error on our server and that's all we know!`
    });
    throw new Error(e);
  }
};

module.exports = {
  getRecipesRecommendation
};
