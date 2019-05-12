const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const userAuthentication = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user === null) {
      return res.status(401).send({
        message: "User not found"
      });
    }

    const compare = bcrypt.compareSync(req.body.password, user.password);

    if (!compare) {
      return res.status(401).send({
        message: "Password doesn't match"
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      JWT_SECRET
    );

    return res.send({
      message: "Successfully signed in",
      data: {
        token
      }
    });
  } catch (e) {
    res.status(500).send({
      message: "There's an internal server error"
    });
    throw new Error(e);
  }
};

const userRegistration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await Users.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user !== null) {
      return res.status(401).send({
        message: "Users already registered"
      });
    }

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    const create = await Users.create({
      email,
      name,
      password: hash
    });

    const token = jwt.sign({
      id: create.id,
      email: email
    });

    return res.status(201).send({
      message: "Successfully registered in",
      data: {
        email,
        name,
        token
      }
    });
  } catch (e) {
    res.status(500).send({
      message: "There's an internal server error"
    });
    throw new Error(e);
  }
};

module.exports = {
  userAuthentication,
  userRegistration
};
