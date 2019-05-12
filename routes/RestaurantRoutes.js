const app = require("express").Router();

const {
  Restaurant: Middleware,
  handleValidatorError
} = require("../middleware");

const Controller = require("../controllers").Restaurant;

// const Middleware = .Restaurant;

app.post(
  "/",
  Middleware.checkCreateRestaurant,
  handleValidatorError,
  Controller.createRestaurant
);
app.get("/", Controller.getRestaurants);

module.exports = app;
