const app = require("express").Router();
const UserController = require("../controllers/UserController");

app.get("/", UserController.getUserList);

module.exports = app;
