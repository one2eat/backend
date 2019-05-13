const model = require("../models/RecipeTag").recipeTag;

const createRecipesTag = async (req, res) => {
  try {
    const { recipesId, tagId } = req.body;
    const create = await model.create({ recipesId, tagId });

    res.send({
      message: "success create recipes tag",
      data: create
    });
  } catch (err) {
    res.send({
      message: "failed to create recipes tag"
    });
  }
};

const getRecipesTag = async (req, res) => {
  try {
    const result = await model.findAll();
    res.send({
      message: "success get recipesTag",
      data: result
    });
  } catch (err) {
    res.send({
      message: "recipesTag not found"
    });
  }
};

const deleteRecipesTag = async (req, res) => {
  try {
    const remove = await model.findByPk(req.path.id);
    remove.delete();
    res.send({
      message: "recipesTag successfully deleted"
    });
  } catch (err) {
    res.send({
      message: "failed to delete recipesTag"
    });
  }
};

const updateRecipesTag = async (req, res) => {
  try {
    const recipesTag = await model.findByPk(req.params.id);

    if (recipesTag === null) {
      return res.send({ message: "recipesTag not found" });
    }

    const { recipesId, tagId } = req.body;
    const updatedRecipesTag = await recipesTag.update({ recipesId, tagId });
  } catch (err) {
    res.send({
      message: "failed to update recipesTag"
    });
  }
};

module.exports({
  createRecipesTag,
  getRecipesTag,
  deleteRecipesTag,
  updateRecipesTag
});
