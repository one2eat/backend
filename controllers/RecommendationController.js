const { sequelize, Sequelize } = require("../models");

const getRecipesRecommendation = async (req, res) => {
  try {
    const rawQuery = `
    SELECT
      Recipes.id,
      Recipes.\`name\`,
      Recipes.\`imageUrl\`,
      COUNT(RecipeReviews.stars)*RecipeReviews.stars/COUNT(RecipeReviews.stars) as reviewCount
    FROM
      Recipes
    LEFT JOIN RecipeReviews
      ON Recipes.id = RecipeReviews.recipesId
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

const getRestaurantRecommendation = async (req, res) => {
  try {
    const rawQuery = `
    SELECT
    Restaurants.id,
    Restaurants.\`name\`,
    Tags.\`name\` AS tag,
    SUM(RestaurantReviews.stars)/stars.length/COUNT(*) as starsAvg ,
    stars.length
    FROM
    RestaurantTags
    JOIN Restaurants
    ON RestaurantTags.restaurantId = Restaurants.id 
    JOIN Tags
    ON Tags.id = RestaurantTags.tagId 
    JOIN (
      SELECT restaurantId, COUNT(*) as length FROM RestaurantReviews
    ) stars
    ON stars.restaurantId = Restaurants.id
    JOIN RestaurantReviews ON RestaurantReviews.restaurantId = Restaurants.id
    GROUP BY id
    ORDER BY stars.length DESC, starsAvg DESC
    LIMIT 3
  `;

    const query = await sequelize.query(rawQuery, {
      type: Sequelize.QueryTypes.SELECT
    });

    res.send({
      message: "Successfully Getting Restaurant Recommendation",
      data: query
    });
  } catch (err) {
    res.status(500).send({
      message: `There's an error on our end, and that's all we know!`
    });

    throw new Error(err);
  }
};

module.exports = {
  getRecipesRecommendation,
  getRestaurantRecommendation
};
