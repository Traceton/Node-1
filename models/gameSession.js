const mongoose = require("mongoose");

const gameSessionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    default: "Unknown",
  },
  numScore: {
    type: Number,
    required: false,
  },
  stringScore: {
    type: String,
    required: false,
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
