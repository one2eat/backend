const { Restaurant, Tag, RestaurantTag, sequelize } = require("../models");

const createRestaurant = async (req, res) => {
  let transaction;

  try {
    const { name, imageUrl, address, phoneNumber, tags } = req.body;

    transaction = await sequelize.transaction();

    const create = await Restaurant.create(
      {
        name,
        imageUrl,
        address,
        phoneNumber
      },
      { transaction }
    );

    await Promise.all(
      tags.map(async tag => {
        const [newTag, created] = await Tag.findOrCreate(
          {
            where: {
              name: tag.toLowerCase()
            },
            transaction
          }
          // { transaction }
        );

        await RestaurantTag.findOrCreate(
          {
            where: {
              restaurantId: create.id,
              tagId: newTag.id
            },
            transaction
          }
          // { transaction }
        );
      })
    );

    transaction.commit();

    // const create = await model.create({
    //   name,
    //   imageUrl,
    //   address,
    //   phoneNumber
    // });

    res.status(201).send({
      message: "successfully created restaurant"
      // data: create
    });
  } catch (err) {
    transaction.rollback();

    res.status(500).send({
      message: "failed to create restaurant",
      stack: err
    });

    throw new Error(err);
  }
};

const getRestaurants = async (req, res) => {
  const result = await model.findAll();
  res.send({
    message: "successfully get restaurant",
    data: result
  });
};

const deleteRestaurant = async (req, res) => {
  try {
    const remove = await model.findByPk(req.path.id);
    remove.delete();
    res.send({
      message: "restaurant is deleted"
    });
  } catch (err) {
    res.send({
      message: "failed to delete restaurant"
    });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await model.findByPk(req.params.id);

    if (restaurant === null) {
      return res.send({ message: "restaurant not found" });
    }

    const { name, imageUrl, address, phoneNumber } = req.body;
    const updatedRestaurant = await restaurant.update({
      name,
      imageUrl,
      address,
      phoneNumber
    });

    res.send({
      message: "update Restaurant succeed"
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "failed to update"
    });
  }
};
module.exports = {
  createRestaurant,
  getRestaurants,
  deleteRestaurant,
  updateRestaurant
};
