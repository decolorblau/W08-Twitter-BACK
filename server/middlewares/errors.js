const chalk = require("chalk");
const { ValidationError } = require("express-validation");
const debug = require("debug")("series:errors");

const notFoundErrorHandler = (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
};

// eslint-disable-next-line no-unused-vars
const generalErrorHandler = (error, req, res, next) => {
  debug(chalk.red("Some error happens: ", error.message));
  if (error instanceof ValidationError) {
    error.code = 400;
    error.message = "Bad request";
  }
  const message = error.code ? error.message : "General error";
  res.status(error.code || 500).json({ error: message });
};

module.exports = {
  notFoundErrorHandler,
  generalErrorHandler,
};
