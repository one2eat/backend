const model = require("../models/recipesreview");

const createRecipesReview = async (req, res) => {
  try {
    const { recipesId, userId, stars, review } = req.body;

    const result = await model.create({
      recipesId,
      userId,
      stars,
      review
    });

    return res.status(201).send({
      success: true,
      message: "Successfully created recipesreview",
      data: result
    });
  } catch (err) {
    return res.status(500).send({
      error: true,
      message: err
    });
  }
};

const getRecipesReview = async (req, res) => {
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
  createRecipesReview,
  getRecipesReview
};
