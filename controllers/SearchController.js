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
				one2eat_dev.Recipes.name,
				one2eat_dev.Recipes.id,
				CONCAT( "recipe" ) AS type 
			FROM
				one2eat_dev.Recipes
				JOIN one2eat_dev.RecipeIngredients ON one2eat_dev.Recipes.id = one2eat_dev.RecipeIngredients.recipesId 
			WHERE
				content LIKE $query
				OR name LIKE $query
			GROUP BY
				id UNION ALL
			SELECT
				one2eat_dev.Restaurants.name,
				one2eat_dev.Restaurants.id,
				CONCAT( "restaurant" ) AS type 
			FROM
				one2eat_dev.RestaurantMenus
				LEFT JOIN one2eat_dev.Restaurants ON one2eat_dev.RestaurantMenus.restaurantId = one2eat_dev.Restaurants.id 
			WHERE
				RestaurantMenus.name LIKE $query
				OR Restaurants.name LIKE $query 
			GROUP BY
				id UNION
			SELECT
				one2eat_dev.Restaurants.name,
				one2eat_dev.Restaurants.id,
				CONCAT( "restaurant" ) AS type 
			FROM
				one2eat_dev.RestaurantMenus
				RIGHT JOIN one2eat_dev.Restaurants ON one2eat_dev.RestaurantMenus.restaurantId = one2eat_dev.Restaurants.id 
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
