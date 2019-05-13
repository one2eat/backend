const app = require("express").Router();

const {
  createRestaurantTag,
  updateRestaurantTag,
  deleteRestaurantTag,
  getRestaurantTag
} = require("../controllers").RestaurantsTag;

app.post("/", createRestaurantTag);
app.get("/", getRestaurantTag);
app.delete("/:id", deleteRestaurantTag);
app.put("/:id", updateRestaurantTag);

module.exports = app;
