const model = require("../models/RestaurantMenuTag").RestaurantMenuTag;

const createRestaurantMenuTag = async (req, res) => {
  try {
    const { restaurantMenuId, tagId } = req.body;
    const create = await model.create({ restaurantMenuId, tagId });

    res.status(201).send({
      message: "success create restaurantMenuTag",
      data: create
    });
  } catch (err) {
    res.send({ message: "failed to create restaurantMenuTag" });
  }
};

const getRestaurantMenuTag = async (req, res) => {
  try {
    const result = await model.findAll();
    res.send({
      message: "success get RestaurantMenuTag",
      data: result
    });
  } catch (err) {
    res.send({
      message: "restaurantMenuTag not found"
    });
  }
};

const deleteRestaurantMenuTag = async (req, res) => {
  try {
    const remove = await model.findByPk(req.path.id);
    remove.delete();
    res.send({
      message: "restaurantMenuTag successfully deleted"
    });
  } catch (err) {
    res.send({
      message: "failed to delete restaurantMenuTag"
    });
  }
};

const updateRestaurantMenuTag = async (req, res) => {
  try {
    const restaurantMenuTag = await model.findByPk(req.params.id);

    if (restaurantMenuTag === null) {
      return res.send({ message: "restaurantMenuTag not found" });
    }

    const { restaurantMenuId, tagId } = req.body;
    const updatedRestaurantMenuTag = await restaurantMenuTag.update({
      restaurantMenuId,
      tagId
    });

    res.send({
      message: "succes to update restaurantMenuTag"
    });
  } catch (err) {
    res.send({
      message: "failed to update restaurantMenuTag"
    });
  }
};
module.exports({
  createRestaurantMenuTag,
  getRestaurantMenuTag,
  deleteRestaurantMenuTag,
  updateRestaurantMenuTag
});
