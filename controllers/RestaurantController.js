const model = require("../models").Restaurant;
const { validationResult } = require("express-validator/check");

const createRestaurant = async (req, res) => {
  try {
    const { name, imageUrl, address, phoneNumber } = req.body;
    const create = await model.create({
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
  const result = await model.findAll();
  res.send({
    message: "successfully get restaurant",
    data: result
  });
};
module.exports = {
  createRestaurant,
  getRestaurants
};
