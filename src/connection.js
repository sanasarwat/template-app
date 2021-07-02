//import mongoose from "mongoose";
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dbname", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => {
  console.log("could not connect to monogo db");
});
db.on("open", () => {
  console.log("connect to mongodb");
});

// const commentsSchema = new mongoose.Schema({
//   // blog: { type: "ObjectId", ref: "Blog" },
//   body: String,
//   date: Date,
// });

// const Comment = new mongoose.model("Comment", commentsSchema);

// const reactComment = new Comment({
//   // blog: 1,
//   body: "this is good",
//   date: "1-2-2021",
// });

// reactComment.save();
