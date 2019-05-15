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
  getRecipeReview,
  deleteRecipes,
  updateRecipes
} = require("../controllers").Recipe;

const { getRecipesRecommendation } = require("../controllers").Recommendation;

const route = require("express").Router();

route.post(
  "/",
  isAuthorized,
  checkCreateRecipe,
  handleValidatorError,
  createRecipe
);

route.get("/", isAuthorized, getAllRecipes);
route.get("/recommendation", getRecipesRecommendation);

route.get("/:id", isAuthorized, getOneRecipe);

route.post(
  "/:id/review",
  isAuthorized,
  checkCreateReviewRecipe,
  handleValidatorError,
  createRecipeReview
);

route.get("/:id/review", getRecipeReview);

route.delete("/:id", deleteRecipes);

route.put("/:id", updateRecipes);

module.exports = route;
