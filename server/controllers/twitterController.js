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
  } catch (error) {
    error.code = 400;
    error.message = "Error on creating a twit!";
    next(error);
  }
};

module.exports = {
  getTwit,
  createTwit,
};
