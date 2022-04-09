const mongoose = require("mongoose");

const commSchema = mongoose.Schema({
  text: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  news: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "News",
  },
});

const Comm = mongoose.model("Comm", commSchema);

module.exports = Comm;
