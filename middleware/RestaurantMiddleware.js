const { check } = require("express-validator/check");

const checkCreateRestaurant = [
  check("name").exists(),
  check("imageUrl").exists(),
  check("address").exists(),
  check("phoneNumber").exists()
];

module.exports = {
  checkCreateRestaurant
};
