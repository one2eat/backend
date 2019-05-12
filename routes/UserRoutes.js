const app = require("express").Router();
const { Users: Middleware, handleValidatorError } = require("../middleware");
const { userRegistration, userAuthentication } = require("../controllers").User;
const { checkSigninField, checkSignupField } = Middleware;

app.post("/signin", checkSigninField, handleValidatorError, userAuthentication);

app.post("/signup", checkSignupField, handleValidatorError, userRegistration);

module.exports = app;
