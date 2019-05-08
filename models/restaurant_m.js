const mongoose = require('../mongoose')

const schema = new mongoose.Schema({
  name: String,
  address: String,
  phoneNumber: String,
  imageUrl: String,
  hours: {
    open: Date,
    close: Date,
  }
}, {
    timestamps: true
  })

const model = mongoose.model('Restaurant', schema)

module.exports = model