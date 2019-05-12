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

    res.send({
      message: "Successfully Created Recipe"
    });
  } catch (err) {
    /**
     * Rollback Data When There's an Error
     */
    transaction.rollback();

    res.status(500).send({
      message: "there's an error on our side, that's all we know!",
      stack: err
    });
    throw new Error(error);
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const result = await Recipe.findAll();

    res.send({
      message: "Success",
      data: result
    });
  } catch (error) {
    res.status(500).send({
      message: "there's an error on our side, that's all we know!",
      stack: error
    });
    throw new Error(error);
  }
};

const getOneRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id, {
      include: [RecipeIngredient, RecipeStep]
    });

    if (recipe === null) {
      return res.status(404).send({
        message: "Recipe not found"
      });
    }

    res.send({
      message: "Success",
      data: recipe
    });
  } catch (e) {
    res.status(500).send({
      message: "There's an error at our side and that's all we know"
    });

    throw new Error(e);
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getOneRecipe
};
