const { Recipe: Middleware, handleValidatorError } = require("../middleware");
const { checkCreateReviewRecipe } = Middleware;

const {
  createRecipe,
  getAllRecipes,
  getOneRecipe,
  createRecipeReview
} = require("../controllers").Recipe;
const route = require("express").Router();

route.post("/", createRecipe);
route.get("/", getAllRecipes);
route.get("/:id", getOneRecipe);

route.post(
  "/:id/review",
  checkCreateReviewRecipe,
  handleValidatorError,
  createRecipeReview
);

module.exports = route;
