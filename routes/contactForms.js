const express = require("express");
const router = express();
const ContactForm = require("../models/contactForm");

// get all contact forms
router.get("/", (req, res) => {
  res.send(`<h1>Contact forms</h1>`);
});
// get single contact form
router.get("/:id", (req, res) => {});
// create single contact form
router.post("/", (req, res) => {});
// delete single contact form
router.delete("/:id", (req, res) => {});
// update single contact form
router.patch("/:id", (req, res) => {});

module.exports = router;
