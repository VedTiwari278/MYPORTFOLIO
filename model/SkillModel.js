const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model("Skill", skillSchema);
