const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  title: { type: String },
  text: { type: Number },
  description: { type: String },
});

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
