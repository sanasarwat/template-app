//step 1
//import mongoose
import mongoose from "mongoose";

const blogSchema = new mongoos.Schema({
  title: String,
  author: { type: String, default: "Sana" },
  body: { type: String, reqiured: true },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const Blog = new mongoose.model("Blog", blogSchema);

module.exports = Blog;
