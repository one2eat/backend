const app = require("express").Router();
const RestaurantController = require("../controllers/RestaurantController");

app.post("/", RestaurantController.createRestaurant);
app.get("/", RestaurantController.getRestaurants);

module.exports = app;
