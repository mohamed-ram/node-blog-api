const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // bad request ObjectId
  if (err.name === "CastError") {
    const message = `Resource not found with id of ${error.value}`;
    error = new ErrorResponse(message, 404);
  }

  // validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((e) => e.message);
    error = new ErrorResponse(message, 400);
  }

  // duplicated value
  if (err.code === 11000) {
    const message = "Duplicated field entered";
    error = new ErrorResponse(message, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server error" });
};

module.exports = errorHandler;
