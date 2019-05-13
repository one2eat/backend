const app = require("express").Router();

const {
  Restaurant: Middleware,
  handleValidatorError
} = require("../middleware");

const { checkCreateRestaurant, checkCreateReviewRestaurant } = Middleware;
const {
  createRestaurant,
  getRestaurants,
  deleteRestaurant,
  updateRestaurant
} = require("../controllers").Restaurant;

// const Middleware = .Restaurant;

app.post("/", checkCreateRestaurant, handleValidatorError, createRestaurant);
app.get("/", getRestaurants);
app.delete("/:id", deleteRestaurant);
app.update("/:id", updateRestaurant);

module.exports = app;
