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
    message: "success fully created restaurant",
    data: create
  });
};

module.exports = {
  createRestaurant
};
