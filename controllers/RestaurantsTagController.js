const { RestaurantTag } = require("../models");

const createRestaurantTag = async (req, res) => {
  try {
    const { restaurantId, tagId } = req.body;
    const create = await RestaurantTag.create({ restaurantId, tagId });

    res.status(201).send({
      message: "success create restaurant tag",
      data: create
    });
  } catch (err) {
    res.status(500).send({ message: "failed to create restaurant tag" });
    throw new Error(err);
  }
};

const getRestaurantTag = async (req, res) => {
  try {
    const result = await RestaurantTag.findAll();
    res.send({
      message: "success get restaurant tag",
      data: result
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: "tag not found"
    });

    throw new Error(err);
  }
};

const deleteRestaurantTag = async (req, res) => {
  try {
    const remove = await RestaurantTag.findByPk(req.path.id);
    remove.delete();
    res.send({
      message: "tag is deleted"
    });
  } catch (err) {
    res.status(500).send({
      message: "failed to delete restaurant tag"
    });
    throw new Error(err);
  }
};

const updateRestaurantTag = async (req, res) => {
  try {
    const restaurantTag = await RestaurantTag.findByPk(req.params.id);

    if (restaurantTag === null) {
      return res.send({ message: "restaurant tag not found" });
    }
    const { restaurantId, tagId } = req.body;
    const updatedRestaurantTag = await restaurantTag.update({
      restaurantId,
      tagId
    });

    res.send({ message: "success to update restaurant tag" });
  } catch (err) {
    res.status(500).send({
      message: "failed to update restaurant tag"
    });
    throw new Error(err);
  }
};
module.exports = {
  createRestaurantTag,
  getRestaurantTag,
  deleteRestaurantTag,
  updateRestaurantTag
};
