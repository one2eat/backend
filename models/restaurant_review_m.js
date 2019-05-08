const mongoose = require('../mongoose')

const schema = new mongoose.Schema({
  restaurantId: 'ObjectId',
  userId: 'ObjectId',
  review: String,
  stars: Number
}, {
    timestamps: true
  })

const model = mongoose.model('RestaurantReview')

module.exports = model