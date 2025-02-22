const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  note: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: () => Date.now(),
  },
  user: String,
  userImage: String
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;