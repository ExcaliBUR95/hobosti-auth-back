const News = require("../models/News.model");

module.exports.newsController = {
  addNews: async (req, res) => {
    try {
      await News.create({
        text: req.body.text,
        user: req.body.user,
        cats: req.body.cats,
      });
      res.json("added news");
    } catch (e) {
      res.json(e);
    }
  },
  patchNews: async (req, res) => {
    try {
      await News.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
      });
      res.json("changed");
    } catch (e) {
      console.log(e);
    }
  },
  deleteNews: async (req, res) => {
    try {
      const deleteNews = await News.findByIdAndDelete(req.params.id);
      res.json(deleteNews);
    } catch (e) {
      console.log(e);
    }
  },
  getNews: async (req, res) => {
    try {
      const getAllNews = await News.find();
      res.json(getAllNews);
    } catch (e) {
      console.log(e);
    }
  },
  getNewsOne: async (req, res) => {
    try {
      const getOneNews = await News.findById(req.params.id);
      res.json(getOneNews);
    } catch (e) {
      res.json(e);
    }
  },
  getNewsInCats: async (req, res) => {
    try {
      const getCatsInNews = await News.find({
        cats: req.params.id,
      });
      res.json(getCatsInNews);
    } catch (e) {
      res.json(e);
    }
  },
};
