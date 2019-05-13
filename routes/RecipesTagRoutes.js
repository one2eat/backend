const app = require("express").Router();

const {
  RecipesTag: Middleware,
  handleValidatorError
} = require("../middleware");

const {
  createRecipesTag,
  getRecipesTag,
  deleteRecipesTag,
  updateRecipesTag
} = require("../controllers").RecipeTag;

app.post("/", createRecipesTag);
app.get("/", getRecipesTag);
app.delete("/:id", deleteRecipesTag);
app.put("/:id", updateRecipesTag);

module.exports = app;
