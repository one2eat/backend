const { check, validationResult } = require("express-validator/check");
const { Users } = require("../models");

const checkSigninField = [check("email").exists(), check("password").exists()];

const checkSignupField = [
  check("name").exists(),
  check("email").exists(),
  check("password").exists()
];

module.exports = {
  checkSigninField,
  checkSignupField
};
