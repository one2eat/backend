const { check, validationResult } = require("express-validator/check");

const handleValidatorError = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).send({
      message: "there's missing input or invalid input",
      errors: errors.array()
    });
    throw new Error(errors.array());
  }

  next();
};

module.exports = {
  handleValidatorError,
  Users: require("./UserMiddleware"),
  Restaurant: require("./RestaurantMiddleware")
};
