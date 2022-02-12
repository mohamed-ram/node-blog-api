const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/blog");
  console.log("Connected to database..");
};

module.exports = connectDB;
