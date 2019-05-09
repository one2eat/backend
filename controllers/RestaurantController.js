const model = require("../models");
const { validationResult } = require("express-validator/check");

const createRestaurant = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({
      message: "there's missing input or invalid input",
      errors: errors.array()
    });
  }

  try {
    const { name, imageUrl, address, phoneNumber } = req.body;
    const create = await model.Restaurant.create({
      name,
      imageUrl,
      address,
      phoneNumber
    });

    res.status(201).send({
      message: "successfully created restaurant",
      data: create
    });
  } catch (err) {
    res.send({
      message: "failed to create restaurant",
      stack: err
    });
  }
};

const getRestaurants = async (req, res) => {
  const result = await model.Restaurant.findAll();
  res.send({
    message: "successfully get restaurant",
    data: result
  });
};
module.exports = {
  createRestaurant,
  getRestaurants
};
