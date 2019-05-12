const {
  createRecipe,
  getAllRecipes,
  getOneRecipe
} = require("../controllers").Recipe;
const route = require("express").Router();

route.post("/", createRecipe);
route.get("/", getAllRecipes);
route.get("/:id", getOneRecipe);

module.exports = route;
