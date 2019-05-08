const model = require("../models");

const createRestaurant = async (req, res) => {
  const { name, imageUrl, address, phoneNumber } = req.body;
  const create = await model.Restaurant.create({
    name,
    imageUrl,
    address,
    phoneNumber
  });

  res.send({
    message: "successfully created restaurant",
    data: create
  });
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
