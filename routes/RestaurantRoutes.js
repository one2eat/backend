const app = require("express").Router();
const RestaurantController = require("../controllers/RestaurantController");

app.post("/", RestaurantController.createRestaurant);

module.exports = app;
