const { Schema, model } = require("mongoose");

const twitterSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Twit = model("tuitah", twitterSchema, "tuits");

module.exports = Twit;
