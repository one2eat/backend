// Use Recipe Model
const model = require("../models");
const { Recipe, RecipeIngredient, RecipeStep, RecipeReview, Users } = model;

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

const createRecipeReview = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);

    if (recipe === null) {
      return res.status(404).send({
        message: "Recipe not found"
      });
    }

    const create = await RecipeReview.create({
      userId: req.auth.id,
      recipesId: req.params.id,
      content: req.body.content,
      stars: req.body.stars
    });

    return res.status(201).send({
      message: "Successfully posted review",
      data: {
        content: req.body.content
      }
    });
  } catch (e) {
    res.status(500).send({
      message: "There's an error on our side and that's all we know"
    });
    throw new Error(e);
  }
};

const getRecipeReview = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);

    if (recipe === null) {
      return res.status(404).send({
        message: "Recipe not found"
      });
    }

    const review = await RecipeReview.findAll({
      where: {
        recipesId: req.params.id
      },
      include: [
        {
          model: Users,
          attributes: ["name", "email"]
        }
      ]
    });

    res.send({
      message: "Success",
      data: review
    });
  } catch (e) {
    res.status(500).send({
      message: "There's an error on our side and that's all we know"
    });
    throw new Error(e);
  }
};

const deleteRecipes = async (req, res) => {
  try {
    const remove = await model.findByPk(req.path.id);
    remove.delete();
    res.send({
      message: "recipe is deleted"
    });
  } catch (err) {
    res.send({
      message: "failed to delete recipe"
    });
  }
};

const updateRecipes = async (req, res) => {
  try {
    const addRecipe = await model.findByPk(req.path.id);
    addRecipe.update();
    res.send({
      message: "add recipe succeed"
    });
  } catch (err) {
    res.send({
      message: "failed to add recipe"
    });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getOneRecipe,
  createRecipeReview,
  getRecipeReview,
  deleteRecipes,
  updateRecipes
};
