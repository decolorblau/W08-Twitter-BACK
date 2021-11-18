const Twit = require("../../database/models/twitter");

const getTwit = async (req, res, next) => {
  try {
    const twit = await Twit.find();
    res.json(twit);
  } catch (error) {
    next(error);
  }
};

const createTwit = async (req, res, next) => {
  try {
    const twit = req.body;
    const newTwit = await Twit.create(twit);
    res.json(newTwit);
  } catch {
    const error = new Error("Something wrong");
    error.code = 400;
    error.message = "Error on creating a twit!";
    next(error);
  }
};

const deleteTwit = async (req, res, next) => {
  const { id } = req.params;
  try {
    const twit = await Twit.findByIdAndDelete(id);
    if (!twit) {
      const error = new Error("Twit not found.");
      error.code = 404;
      next(error);
    } else {
      res.status(200).json(twit);
    }
  } catch (error) {
    next(error);
  }
};

const likeTwit = async (req, res, next) => {
  console.log("hola");
  try {
    const { id } = req.params;
    const twit = await Twit.findById(id);
    if (!twit) {
      const error = new Error("Twit not found.");
      error.code = 404;
      return next(error);
    }
    twit.likes += 1;
    await twit.save();
    return res.status(200).json(twit);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTwit,
  createTwit,
  deleteTwit,
  likeTwit,
};
