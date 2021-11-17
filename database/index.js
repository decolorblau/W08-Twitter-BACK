/* eslint-disable no-underscore-dangle */
const debug = require("debug")("twitter:database");

const chalk = require("chalk");
const mongoose = require("mongoose");

const connectDB = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.set("debug", true);
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        // eslint-disable-next-line no-underscore-dangle
        delete ret._id;
        // eslint-disable-next-line no-underscore-dangle
        delete ret.__v;
      },
    });
    mongoose.connect(connectionString, (error) => {
      if (error) {
        debug(chalk.red("No se ha podido iniciar la base de datos."));
        debug(chalk.red(error.message));
        reject();
        return;
      }
      debug(chalk.green("Conectado a la base de datos"));
      resolve();
    });
    mongoose.connection.on("close", () => {
      debug(chalk.green("Desconectado de la base de datos"));
    });
  });

module.exports = connectDB;
