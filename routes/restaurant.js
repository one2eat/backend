const express = require('express')
const app = express.Router()

const restaurantMiddleware = require('../middleware/restaurants')

const { check } = require('express-validator/check');

app.get('/', restaurantMiddleware.getRestaurant)

/**
 * @params name, address, phoneNumber, imageUrl, startHour, closeHour
 */
app.post('/', [
  check('name').isLength({ min: 5 }),
  check('address').isLength({ min: 5 }),
  check('phoneNumber').isLength({ min: 5 }),
  check('imageUrl').isLength({ min: 5 }),
  check('startHour').isISO8601(),
  check('closeHour').isISO8601(),
], restaurantMiddleware.createRestaurant)



module.exports = app