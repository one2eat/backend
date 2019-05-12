const { validationResult } = require("express-validator/check");
const { Users } = require("../models");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

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

const isAuthorized = async (req, res, next) => {
  let token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token || token.length <= 0) {
    return res.status(401).send({
      message: "Token not found"
    });
  }

  try {
    const verify = jwt.verify(token, JWT_SECRET);

    const user = await Users.findByPk(verify.id);

    if (user === null) {
      return res.status(401).send({
        message: "Token is invalid"
      });
    }

    next();
  } catch (e) {
    res.status(401).send({
      message: "Token is invalid"
    });
    throw new Error(e);
  }
};

module.exports = {
  handleValidatorError,
  isAuthorized,
  Users: require("./UserMiddleware"),
  Restaurant: require("./RestaurantMiddleware"),
  Recipe: require("./RecipeMiddleware")
};
