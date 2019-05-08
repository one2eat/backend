const mongoose = require("../mongoose");

const schema = new mongoose.Schema(
  {
    recipesId: "ObjectId",
    userId: "ObjectId",
    stars: Number,
    review: String
  },
  {
    timestamps: true
  }
);

const model = mongoose.model("RecipesReview", schema);

module.exports = model;
