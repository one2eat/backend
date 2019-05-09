// Use Recipe Model
const model = require("../models");
const { Recipe, RecipeIngredient, RecipeStep } = model;

const createRecipe = async (req, res) => {
  /**
   * Initialize Transaction Variable
   */
  let transaction;

  /**
   * Get Body
   * @body name: String
   * @body imageUrl: String
   * @body ingredients: Array<String>
   * @body steps: Array<String>
   */
  const { name, imageUrl, ingredients, steps } = req.body;

  try {
    /**
     * Bind Model Transaction to Transaction Variable
     */
    transaction = await model.sequelize.transaction();

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

    /**
     * Loop Steps and Insert New Data from each Step
     */
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

    /** Commit The Transaction */
    transaction.commit();

    return res.send({
      message: "Successfully Created Recipe"
    });
  } catch (err) {
    /**
     * Rollback Data When There's an Error
     */
    transaction.rollback();

    return res.status(500).send({
      message: "there's an error on our side, that's all we know!",
      stack: err
    });
  }
};

const getRecipes = async (req, res) => {
  try {
    const result = await Recipe.findAll({
      include: [RecipeIngredient, RecipeStep]
    });

    return res.send({
      message: "Success",
      data: result
    });
  } catch (error) {
    return res.status(500).send({
      message: "there's an error on our side, that's all we know!",
      stack: error
    });
  }
};

module.exports = {
  createRecipe,
  getRecipes
};
