const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./db/db.js");
const logger = require("./middlewares/logger");
// dotenv config.
dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });

// connect to db.
connectDB();

const app = express();

// body parser.
app.use(express.json());

// development logger.
app.use(logger);

// setup server
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promis) => {
  console.log(err.message);

  // stop server
  server.close();
});
