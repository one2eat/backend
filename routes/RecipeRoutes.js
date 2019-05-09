const Controller = require("../controllers").Recipe;
const route = require("express").Router();

route.post("/", Controller.createRecipe);
route.get("/", Controller.getRecipes);

module.exports = route;
