const Controller = require("../controllers").Recipe;
const route = require("express").Router();

route.post("/", Controller.createRecipe);

module.exports = route;
