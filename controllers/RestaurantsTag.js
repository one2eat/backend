const model = require("../models/RestaurantTag").restaurantTag;

const createRestaurantTag = async (req, res) => {
  try {
    const { restaurantId, tagId } = req.body;
    const create = await model.create({ restaurantId, tagId });

    res.status(201).send({
      message: "success create restaurant tag",
      data: create
    });
  } catch (err) {
    res.send({ message: "failed to create restaurant tag" });
  }
};

const getRestaurantTag = async (req, res) => {
  try {
    const result = await model.findAll();
    res.send({
      message: "success get restaurant tag"
    });
  } catch (err) {
    res.send({
      message: "tag not found"
    });
  }
};

const deleteRestaurantTag = async (req, res) => {
  try {
    const remove = await model.findByPk(req.path.id);
    remove.delete();
    res.send({
      message: "tag is deleted"
    });
  } catch (err) {
    res.send({
      message: "failed to delete restaurant tag"
    });
  }
};

const updateTag = async (req, res) => {
  try {
    const restaurantTag = await model.findByPk(req.params.id);

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
    res.send({
      message: "failed to update restaurant tag"
    });
  }
};
module.exports({
  createRestaurantTag,
  getRestaurantTag,
  deleteRestaurantTag,
  updatedRestaurantTag
});
