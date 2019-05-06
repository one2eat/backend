const model = require("../models/restaurant_review");

const createRestaurantReview = async (req, res) => {
  try {
    const { restaurantId, userId, review, stars } = req.body;

    const result = await model.create({
      restaurantId,
      userId,
      review,
      stars
    });

    return res.status(201).send({
      success: true,
      message: "Successfully created restaurant",
      data: result
    });
  } catch (err) {
    return res.status(500).send({
      error: true,
      message: err
    });
  }
};

const getRestaurantReview = async (req, res) => {
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
  createRestaurantReview,
  getRestaurantReview
};
