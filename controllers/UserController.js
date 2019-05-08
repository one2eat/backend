const model = require("../models");

const getUserList = async (req, res) => {
  const users = await model.Users.findAll();
  res.send({
    message: "WOY",
    data: users
  });
};

module.exports = {
  getUserList
};
