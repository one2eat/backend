const express = require("express");
const app = express.Router();

const recipesReviewMiddleware = require("../middleware/recipesreview");

app.post("/", recipesReviewMiddleware.createRecipesReview);
app.get("/", recipesReviewMiddleware.getRecipesReview);

module.exports = app;
