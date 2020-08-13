const express = require("express");
const router = express();
const User = require("../models/user");

// get all users
router.get("/", (req, res) => {
  res.send(`<h1>users</h1>`);
});
// get single user by id
router.get("/:id", (req, res) => {});
// create a single user
router.post("/", (req, res) => {});
// delete a single user
router.delete("/:id", (req, res) => {});
// update a single user
router.patch("/:id", (req, res) => {});

module.exports = router;
