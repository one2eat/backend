const model = require("../models/recipes");

const createRecipes = async (req, res) => {
  try {
    const { name, imageUrl, ingredients, tags, steps } = req.body;

    const result = await model.create({
      name,
      imageUrl,
      ingredients,
      tags,
      steps
    });

    return res.status(201).send({
      success: true,
      message: "Successfully created recipes",
      data: result
    });
  } catch (err) {
    return res.status(500).send({
      error: true,
      message: err
    });
  }
};

const getRecipes = async (req, res) => {
  try {
    const result = await model.find();
    return res.send({
      success: true,
      message: "Successfully get data",
      data: result
    });
  } catch (err) {
    return res.status(500).send({
      error: true,
      message: err
    });
  }
};

module.exports = {
  createRecipes,
  getRecipes
};
