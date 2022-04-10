const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  img: String,
  title: String,
  text: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  cats: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Cats",
  },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
