const { sequelize, Sequelize } = require("../models");

const searchRecipesAndRestaurant = async (req, res) => {
  try {
    if (req.query.q.length < 3) {
      return res.status(422).send({
        message: "You need to enter atleast 3 characters"
      });
    }

    const rawQuery = `
SELECT
Recipes.id,
Recipes.\`name\`,
SUM(RecipeReviews.stars)/stars.length/COUNT(*) as star,
CONCAT( "recipe" ) AS type
FROM
Recipes
LEFT JOIN RecipeIngredients
ON Recipes.id = RecipeIngredients.recipesId 
LEFT JOIN RecipeSteps
ON RecipeSteps.recipesId = Recipes.id 
LEFT JOIN RecipeReviews
ON RecipeReviews.recipesId = Recipes.id
LEFT JOIN (
	SELECT recipesId, COUNT(*) as length FROM RecipeReviews
) stars ON RecipeReviews.recipesId = Recipes.id
WHERE
RecipeIngredients.content LIKE $query OR Recipes.name LIKE $query OR RecipeSteps.content LIKE $query
GROUP BY
id 
-- END OF RECIPES
-- UNION START
UNION ALL
-- START OF RESTAURANT
SELECT
Restaurants.id,
Restaurants.\`name\`,
SUM(RestaurantReviews.stars)/stars.length/COUNT(*) AS star,
CONCAT("restaurant") as type
FROM
RestaurantTags
LEFT JOIN Restaurants
ON RestaurantTags.restaurantId = Restaurants.id 
LEFT JOIN Tags
ON Tags.id = RestaurantTags.tagId 
LEFT JOIN RestaurantMenus
ON RestaurantMenus.restaurantId = Restaurants.id
LEFT JOIN RestaurantReviews ON RestaurantReviews.restaurantId = Restaurants.id
LEFT JOIN (
	SELECT restaurantId, COUNT(*) as length FROM RestaurantReviews
) stars ON RestaurantReviews.restaurantId = Restaurants.id
WHERE Restaurants.name LIKE $query OR RestaurantMenus.name LIKE $query OR Tags.name LIKE $query
GROUP BY
id
ORDER BY
star DESC
    `;

    const query = await sequelize.query(rawQuery, {
      bind: {
        query: `%${req.query.q}%` || "%%"
      },
      type: Sequelize.QueryTypes.SELECT
    });

    console.log(query);

    res.send({
      message: "Success",
      data: query
    });
  } catch (e) {
    res.status(500).send({
      message: `There's an error on our end, and that's all we know`
    });

    throw new Error(e);
  }
};

module.exports = {
  searchRecipesAndRestaurant
};
