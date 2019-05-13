const { RestaurantMenuTag } = require("../models");

const createRestaurantMenuTag = async (req, res) => {
  try {
    const { restaurantMenuId, tagId } = req.body;
    const create = await RestaurantMenuTag.create({ restaurantMenuId, tagId });

    res.status(201).send({
      message: "success create restaurantMenuTag",
      data: create
    });
  } catch (err) {
    res.status(500).send({ message: "failed to create restaurantMenuTag" });

    throw new Error(err);
  }
};

const getRestaurantMenuTag = async (req, res) => {
  try {
    const result = await RestaurantMenuTag.findAll();
    res.send({
      message: "success get RestaurantMenuTag",
      data: result
    });
  } catch (err) {
    res.status(500).send({
      message: "restaurantMenuTag not found"
    });
    throw new Error(err);
  }
};

const deleteRestaurantMenuTag = async (req, res) => {
  try {
    const remove = await RestaurantMenuTag.findByPk(req.path.id);

    if (restaurantMenuTag === null) {
      return res.status(404).send({ message: "restaurantMenuTag not found" });
    }
    remove.destroy();
    res.send({
      message: "restaurantMenuTag successfully deleted"
    });
  } catch (err) {
    res.status(500).send({
      message: "failed to delete restaurantMenuTag"
    });
    throw new Error(err);
  }
};

const updateRestaurantMenuTag = async (req, res) => {
  try {
    const restaurantMenuTag = await RestaurantMenuTag.findByPk(req.params.id);

    if (restaurantMenuTag === null) {
      return res.send({ message: "restaurantMenuTag not found" });
    }

    const { restaurantMenuId, tagId } = req.body;
    const updatedRestaurantMenuTag = await RestaurantMenuTag.update({
      restaurantMenuId,
      tagId
    });

    res.send({
      message: "succes to update restaurantMenuTag"
    });
  } catch (err) {
    res.status(500).send({
      message: "failed to update restaurantMenuTag"
    });
    throw new Error(err);
  }
};
module.exports = {
  createRestaurantMenuTag,
  getRestaurantMenuTag,
  deleteRestaurantMenuTag,
  updateRestaurantMenuTag
};
