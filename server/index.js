const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const debug = require("debug")("tuit:server");
const chalk = require("chalk");

const app = express();
app.use(cors());
app.use(express.json());

const initializeServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Listening ${port} port`));
      resolve(server);
    });
    server.on("error", (error) => {
      debug(chalk.red("There was an error starting the server."));
      if (error.code === "EADDRINUSE") {
        debug(chalk.red(`The port ${port} is in use.`));
      }
      reject();
    });
    server.on("close", () => {
      debug(chalk.yellow("server express disconnected"));
    });
  });

app.use(morgan("dev"));

module.exports = { initializeServer, app };
