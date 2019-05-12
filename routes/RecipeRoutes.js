const { createRecipe, getAllRecipes } = require("../controllers").Recipe;
const route = require("express").Router();

route.post("/", createRecipe);
route.get("/", getAllRecipes);

module.exports = route;
