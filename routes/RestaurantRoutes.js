const app = require("express").Router();

const {
  Restaurant: Middleware,
  handleValidatorError
} = require("../middleware");

const { checkCreateRestaurant, checkCreateReviewRestaurant } = Middleware;

const {
  getRestaurantRecommendation
} = require("../controllers").Recommendation;

const {
  createRestaurant,
  getRestaurants,
  deleteRestaurant,
  updateRestaurant
} = require("../controllers").Restaurant;

// const Middleware = .Restaurant;

app.get("/recommendation", getRestaurantRecommendation);
app.post("/", checkCreateRestaurant, handleValidatorError, createRestaurant);
app.get("/", getRestaurants);
app.delete("/:id", deleteRestaurant);
app.put("/:id", updateRestaurant);

module.exports = app;
