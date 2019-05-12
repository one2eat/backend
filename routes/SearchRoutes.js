const express = require("express");
const app = express.Router();

const { searchRecipesAndRestaurant } = require("../controllers").Search;

app.get("/", searchRecipesAndRestaurant);

module.exports = app;
