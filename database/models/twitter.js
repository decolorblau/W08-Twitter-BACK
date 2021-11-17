const { Schema, model } = require("mongoose");

const twitterSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});

const Twit = model("tuitah", twitterSchema, "tuits");

module.exports = Twit;
