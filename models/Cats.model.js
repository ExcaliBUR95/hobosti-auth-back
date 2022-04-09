const mongoose = require("mongoose");

const catsSchema = mongoose.Schema({
  text: String,
});

const Cats = mongoose.model("Cats", catsSchema);

module.exports = Cats;
