const Cats = require("../models/Cats.model");

module.exports.catsController = {
  addCats: async (req, res) => {
    try {
      await Cats.create({
        text: req.body.text,
      });
      res.json("added");
    } catch (e) {
      res.json(e);
    }
  },
  getCats: async (req, res) => {
    try {
      const getAll = await Cats.find();
      res.json(getAll);
    } catch (e) {
      res.json(e);
    }
  },
  getCatsOne: async (req, res) => {
    try {
      const getOne = await Cats.find({
        news: req.params.id,
      });
      res.json(getOne);
    } catch (e) {
      res.json(e);
    }
  },
};
