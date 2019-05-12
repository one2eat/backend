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
				Recipes.name,
				Recipes.id,
				CONCAT( "recipe" ) AS type 
			FROM
				Recipes
				JOIN RecipeIngredients ON Recipes.id = RecipeIngredients.recipesId 
			WHERE
				content LIKE $query
				OR name LIKE $query
			GROUP BY
				id UNION ALL
			SELECT
				Restaurants.name,
				Restaurants.id,
				CONCAT( "restaurant" ) AS type 
			FROM
				RestaurantMenus
				LEFT JOIN Restaurants ON RestaurantMenus.restaurantId = Restaurants.id 
			WHERE
				RestaurantMenus.name LIKE $query
				OR Restaurants.name LIKE $query 
			GROUP BY
				id UNION
			SELECT
				Restaurants.name,
				Restaurants.id,
				CONCAT( "restaurant" ) AS type 
			FROM
				RestaurantMenus
				RIGHT JOIN Restaurants ON RestaurantMenus.restaurantId = Restaurants.id 
			WHERE
				RestaurantMenus.name LIKE $query
				OR Restaurants.name LIKE $query
			GROUP BY
				id
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
