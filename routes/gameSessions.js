const express = require("express");
const router = express();
const GameSession = require("../models/gameSession");

// get all game sessions
router.get("/", (req, res) => {
  res.send(`<h1>game sessions</h1>`);
});
// get single game session by id
router.get("/:id", (req, res) => {});
// create a single game session
router.post("/", (req, res) => {});
// delete a single game session
router.delete("/:id", (req, res) => {});
// update a single game session
router.patch("/:id", (req, res) => {});
module.exports = router;
