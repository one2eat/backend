const { Tag } = require("../models");

const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const create = await Tag.create({ name });

    res.status(201).send({
      message: "success create tag",
      data: create
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({ message: "failed to create tag" });

    throw new Error(err);
  }
};

const getTag = async (req, res) => {
  try {
    const result = await Tag.findAll();

    res.send({
      message: "succesfully get tag",
      data: result
    });
  } catch (err) {
    res.status(500).send({
      message: "There's an error on our side and that's all we know"
    });

    throw new Error(err);
  }
};

const deleteTag = async (req, res) => {
  try {
    const remove = await Tag.findByPk(req.params.id);

    if (remove === null) {
      return res.send({ message: "tag not found" });
    }

    await remove.destroy();
    res.send({
      message: "tag successfully deleted"
    });
  } catch (err) {
    res.status(500).send({
      message: "failed to delete tag"
    });

    throw new Error(err);
  }
};

const updateTag = async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);

    if (tag === null) {
      return res.send({ message: "tag not found" });
    }
    const { name } = req.body;
    const updatedTag = await tag.update({ name });

    res.send({ message: "success to update tag" });
  } catch (err) {
    res.status(500).send({
      message: "failed to update tag"
    });

    throw new Error(err);
  }
};

module.exports = {
  createTag,
  getTag,
  deleteTag,
  updateTag
};
