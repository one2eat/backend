const express = require("express");
const app = express.Router();

const restaurantReviewMiddleware = require("../middleware/restaurant_review");

app.post("/", restaurantReviewMiddleware.createRestaurantReview);
app.get("/", restaurantReviewMiddleware.getRestaurantReview);

module.exports = app;
