const express = require("express");
const router = express();
const GameSession = require("../models/gameSession");

// find game session by id
let findGameSession = async (req, res, next) => {
  let gameSession;
  try {
    gameSession = await GameSession.findById(req.params.id);
    if (gameSession == null) {
      return res.status(404).json({ message: "cannot find that game session" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.gameSession = gameSession;
  next();
};

// get all game sessions
router.get("/", async (req, res) => {
  try {
    const gameSessions = await GameSession.find();
    res.status(201).json(gameSessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// get single game session by id
router.get("/:id", findGameSession, (req, res) => {
  try {
    res.status(201).json(res.gameSession);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// create a single game session
router.post("/", async (req, res) => {
  const gameSession = new GameSession({
    username: req.body.username,
    numScore: req.body.numScore,
    stringScore: req.body.stringScore,
    game: req.body.game,
    gameLength: req.body.gameLength,
    datePlayed: req.body.datePlayed,
  });
  try {
    const newGameSession = await gameSession.save();
    res.status(201).json(newGameSession);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// delete a single game session
router.delete("/:id", findGameSession, async (req, res) => {
  try {
    await res.gameSession.remove();
    res.status(201).json({ message: "Game session was deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// update a single game session
router.patch("/:id", findGameSession, async (req, res) => {
  if (req.body.username != null) {
    res.gameSession.username = req.body.username;
  }
  if (req.body.numScore != null) {
    res.gameSession.numScore = req.body.numScore;
  }
  if (req.body.stringScore != null) {
    res.gameSession.stringScore = req.body.stringScore;
  }
  if (req.body.game != null) {
    res.gameSession.game = req.body.game;
  }
  if (req.body.gameLength != null) {
    res.gameSession.gameLength = req.body.gameLength;
  }

  try {
    const updatedGameSession = await res.gameSession.save();
    res.status(201).json(updatedGameSession);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
