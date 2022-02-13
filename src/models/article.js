const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 5,
      maxLength: 50,
      required: [true, "Please enter a title"],
    },
    description: {
      type: String,
      maxLength: 500,
      required: false,
    },
    author: {
      type: String,
    },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
