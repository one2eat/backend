const app = require("express").Router();

const {
  createRestaurantMenuTag,
  getRestaurantMenuTag,
  deleteRestaurantMenuTag,
  updateRestaurantMenuTag
} = require("../controllers").RecipeTag;

app.post("/", createRestaurantMenuTag);
app.get("/", getRestaurantMenuTag);
app.delete("/:id", deleteRestaurantMenuTag);
app.put("/:id", updateRestaurantMenuTag);

module.exports = app;
