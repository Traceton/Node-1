const mongoose = require("mongoose");

const gameSessionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    default: "Unknown",
  },
  numScore: {
    type: Number,
    required: true,
  },
  stringScore: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  gameLength: {
    type: Number,
    required: false,
  },
  datePlayed: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("gameSession", gameSessionSchema);
