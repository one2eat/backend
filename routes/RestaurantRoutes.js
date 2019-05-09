const app = require("express").Router();

const Controller = require("../controllers/RestaurantController");
const Middleware = require("../middleware/RestaurantMiddleware");

app.post("/", Middleware.checkCreateRestaurant, Controller.createRestaurant);
app.get("/", Controller.getRestaurants);

module.exports = app;
