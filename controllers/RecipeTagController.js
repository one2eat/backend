const { RecipeTag } = require("../models");

const createRecipesTag = async (req, res) => {
  try {
    const { recipesId, tagId } = req.body;
    const create = await RecipeTag.create({ recipesId, tagId });

    res.send({
      message: "success create recipes tag",
      data: create
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: "failed to create recipes tag"
    });

    throw new Error(err);
  }
};

const getRecipesTag = async (req, res) => {
  try {
    const result = await RecipeTag.findAll();
    res.send({
      message: "success get recipesTag",
      data: result
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "recipesTag not found"
    });
    throw new Error(err);
  }
};

const deleteRecipesTag = async (req, res) => {
  try {
    const remove = await RecipeTag.findByPk(req.path.id);
    remove.delete();
    res.send({
      message: "recipesTag successfully deleted"
    });
  } catch (err) {
    res.send({
      message: "failed to delete recipesTag"
    });
    throw new Error(err);
  }
};

const updateRecipesTag = async (req, res) => {
  try {
    const recipeTag = await RecipeTag.findByPk(req.params.id);

    if (recipeTag === null) {
      return res.send({ message: "recipesTag not found" });
    }

    const { recipesId, tagId } = req.body;
    const updatedRecipesTag = await recipeTag.update({ recipesId, tagId });

    res.send({
      message: "update recipesTag success"
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "failed to update recipesTag"
    });

    throw new Error(err);
  }
};

module.exports = {
  createRecipesTag,
  getRecipesTag,
  deleteRecipesTag,
  updateRecipesTag
};
