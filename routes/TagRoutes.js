const {
  getTag,
  deleteTag,
  updateTag,
  createTag
} = require("../controllers").Tag;

const route = require("express").Router();

route.post("/", createTag);
route.get("/", getTag);
route.delete("/:id", deleteTag);
route.put("/:id", updateTag);

module.exports = route;
