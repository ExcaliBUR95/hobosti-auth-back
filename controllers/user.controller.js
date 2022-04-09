const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    const allUsers = User.find();
    res.json(allUsers);
  },

  registerUsers: async (req, res) => {
    try {
      const { login, password } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({ login: login, password: hash });
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },

  login: async (req, res) => {
    const { login, password } = req.body;
    const condidate = await User.findOne({ login });

    if (!condidate) {
      res.status(401).json("Неверный логин");
    }
    const valid = bcrypt.compare(password, condidate.password);

    if (!valid) {
      return res.status(401).json("Неверный пароль");
    }

    const payload = {
      password: condidate.password,
      login: condidate.login,
    };
    const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "7d",
    });
    res.json({ token, id: condidate._id });
  },
};
