const Twitter = require("../../database/models/twitter");

const getTwitter = async (req, res, next) => {
  try {
    const twitter = await Twitter.find();
    res.json(twitter);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTwitter,
};
