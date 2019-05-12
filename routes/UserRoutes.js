const app = require("express").Router();
const { Users: Middleware, handleValidatorError } = require("../middleware");
const { User: Controller } = require("../controllers");

app.get(
  "/signin",
  Middleware.checkSigninField,
  handleValidatorError,
  Controller.userAuthentication
);

app.get(
  "/signin",
  Middleware.checkSignupField,
  handleValidatorError,
  Controller.userRegistration
);

module.exports = app;
