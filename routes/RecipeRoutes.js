const {
  Recipe: Middleware,
  handleValidatorError,
  isAuthorized
} = require("../middleware");
const { checkCreateReviewRecipe, checkCreateRecipe } = Middleware;

const {
  createRecipe,
  getAllRecipes,
  getOneRecipe,
  createRecipeReview,
  getRecipeReview
} = require("../controllers").Recipe;
const route = require("express").Router();

route.post(
  "/",
  isAuthorized,
  checkCreateRecipe,
  handleValidatorError,
  createRecipe
);

route.get("/", isAuthorized, getAllRecipes);
route.get("/:id", isAuthorized, getOneRecipe);

route.post(
  "/:id/review",
  isAuthorized,
  checkCreateReviewRecipe,
  handleValidatorError,
  createRecipeReview
);

route.get("/:id/review", getRecipeReview);

module.exports = route;
