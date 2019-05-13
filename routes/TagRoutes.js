const { getTag } = require("../controllers").Tag;

const route = require("express").Router();

route.get("/", getTag);

module.exports = route;
