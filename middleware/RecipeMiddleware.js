const { check } = require("express-validator/check");

const checkCreateRecipe = [check("name").exists()];

const checkCreateReviewRecipe = [
  check("content").exists(),
  check("stars").isIn([1, 2, 3, 4, 5])
];

module.exports = {
  checkCreateRecipe,
  checkCreateReviewRecipe
};
