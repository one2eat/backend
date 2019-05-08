const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String,
    imageUrl: String,
    ingredients: [],
    tags: [],
    steps: []
  },
  {
    timestamps: true
  }
);

const model = mongoose.model("Recipes", schema);

module.exports = model;
