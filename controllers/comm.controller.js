const Comm = require("../models/Comm.model");

module.exports.commController = {
  getAllComm: async (req, res) => {
    try {
      const getAll = await Comm.find();
      res.json(getAll);
    } catch (e) {
      res.json("error:" + e);
    }
  },
  addCom: async (req, res) => {
    try {
      const comm = await Comm.create({
        text: req.body.text,
        user: req.user.id,
        news: req.body.news,
      });
      return res.json("add comm");
    } catch (e) {
      return res.status(401).json("неверный токен " + e.toString());
    }
  },
  patchComm: async (req, res) => {
    await Comm.findByIdAndUpdate(req.params.id, {
      text: req.body.text,
    });
    res.json("patched");
  },
  deleteComm: async (req, res) => {
    try {
      await Comm.findByIdAndDelete(req.params.id);
      res.json("deleted");
    } catch (e) {
      res.json(e);
    }
  },
};
