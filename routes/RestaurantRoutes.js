const app = require("express").Router();

const Controller = require("../controllers").Restaurant;
const Middleware = require("../middleware").Restaurant;

app.post("/", Middleware.checkCreateRestaurant, Controller.createRestaurant);
app.get("/", Controller.getRestaurants);

module.exports = app;
