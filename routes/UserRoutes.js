const app = require("express").Router();
const { Users: Middleware, handleValidatorError } = require("../middleware");
const { User: Controller } = require("../controllers");

app.post(
  "/signin",
  Middleware.checkSigninField,
  handleValidatorError,
  Controller.userAuthentication
);

app.post(
  "/signup",
  Middleware.checkSignupField,
  handleValidatorError,
  Controller.userRegistration
);

module.exports = app;
