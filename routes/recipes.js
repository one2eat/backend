const express = require("express");
const app = express.Router();

const recipesMiddleware = require("../middleware/recipes");

app.post("/", recipesMiddleware.createRecipes);

app.get("/", recipesMiddleware.getRecipes);

module.exports = app;
