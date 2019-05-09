// Use Recipe Model
const model = require("../models");
const { Recipe, RecipeIngredient, RecipeStep } = model;

const createRecipe = async (req, res) => {
  // let transaction;

  const { name, imageUrl, ingredients, steps } = req.body;
  try {
    /**
     * Initialize Transaction
     */
    await model.sequelize.transaction().then(async transaction => {
      /**
       * Create Recipe
       */
      const recipe = await Recipe.create({ name, imageUrl }, { transaction });

      /**
       * Loop Ingredients and Insert New Data from each Ingredient
       */

      await Promise.all(
        ingredients.map(async item => {
          await RecipeIngredient.create(
            {
              recipesId: recipe.id,
              content: item
            },
            { transaction }
          );
        })
      );

      await Promise.all(
        steps.map(async (step, index) => {
          await RecipeStep.create(
            {
              recipesId: recipe.id,
              step: index,
              content: step
            },
            { transaction }
          );
        })
      );

      transaction.commit();
    });

    res.send({
      message: "Successfully Created Recipe"
      // data: recipe
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "there's an error on our side, that's all we know!",
      stack: err
    });
  }
};

module.exports = {
  createRecipe
};
