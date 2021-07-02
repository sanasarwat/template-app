import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  blog: { type: "ObjectId", ref: "Blog" },
  body: String,
  date: Date,
});

const Comment = new mongoose.model("Comment", commentsSchema);

module.exports = Comment;
