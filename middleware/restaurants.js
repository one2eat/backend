const { validationResult } = require('express-validator/check');

const model = require('../models/restaurant')

const createRestaurant = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).send({ error: true, message: 'There\'s missing input in your request', errors: errors.array() });
    }


    const { name, address, phoneNumber, imageUrl, startHour, closeHour } = req.body;

    const result = await model.create({
      name,
      address,
      phoneNumber,
      imageUrl,
      hours: {
        open: startHour,
        close: closeHour,
      }
    })

    return res.status(201).send({
      success: true,
      message: 'Successfully created restaurant',
      data: result
    })
  } catch (err) {
    return res.status(500).send({
      error: true,
      message: err
    })
  }
}

const getRestaurant = async (req, res) => {
  try {
    const result = await model.find()
    return res.send({
      success: true,
      message: 'Successfully get data',
      data: result
    })
  } catch (err) {
    return res.status(500).send({
      error: true,
      message: err
    })
  }
}

module.exports = {
  createRestaurant,
  getRestaurant
}