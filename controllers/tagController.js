const model = require("../models/Tag").tag;

const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const create = await model.create({ name });

    if (tag === null) {
      res.send({ message: "tag is not found" });
    }

    res.status(201).send({
      message: "success create tag",
      data: create
    });
  } catch (err) {
    res.send({ message: "failed to create tag" });
  }
};

const getTag = async (req, res) => {
  try {
    const result = await model.findAll();
    res.send({
      message: "succesfully get tag",
      data: result
    });
  } catch (err) {
    res.send({
      message: "tag not found"
    });
  }
};

const deleteTag = async (req, res) => {
  try {
    const remove = await model.findByPk(req.path.id);
    remove.delete();
    res.send({
      message: "tag successfully deleted"
    });
  } catch (err) {
    res.send({
      message: "failed to delete tag"
    });
  }
};

const updateTag = async (req, res) => {
  try {
    const tag = await model.findByPk(req.params.id);

    if (tag === null) {
      return res.send({ message: "tag not found" });
    }
    const { name } = req.body;
    const updatedTag = await tag.update({ name });

    res.send({ message: "success to update tag" });
  } catch (err) {
    res.send({
      message: "failed to update tag"
    });
  }
};
module.exports({ createTag, getTag, deleteTag, updateTag });
