const app = require("express").Router();

const {
  createRecipesTag,
  updateRecipesTag,
  deleteRecipesTag,
  getRecipesTag
} = require("../controllers").RecipeTag;

app.post("/", createRecipesTag);
app.get("/", getRecipesTag);
app.delete("/:id", deleteRecipesTag);
app.put("/:id", updateRecipesTag);

module.exports = app;
