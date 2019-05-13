const app = require("express").Router();

const {
  RestaurantTag: Middleware,
  handleValidatorError
} = require("../middleware");

const {
  createRestaurantTag,
  getRestaurantTag,
  deleteRestaurantTag,
  updateRestaurantTag
} = require("../controllers").RestaurantTag;

app.post("/", createRestaurantTag);
app.get("/", getRestaurantTag);
app.delete("/:id", deleteRestaurantTag);
app.put("/:id", updateRestaurantTag);

module.exports = app;
