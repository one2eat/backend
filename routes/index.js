const express = require("express");
const app = express.Router();

app.get("/", (req, res) =>
  res.send({
    message: "Hello World from router"
  })
);

module.exports = {
  Root: app,
  Recipe: require("./RecipeRoutes"),
  Restaurant: require("./RestaurantRoutes"),
  User: require("./UserRoutes"),
  Search: require("./SearchRoutes"),
  Tag: require("./TagRoutes")
};
