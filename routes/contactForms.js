const express = require("express");
const router = express();
const ContactForm = require("../models/contactForm");

// find contact form by id, middleware function
let findContactForm = (req, res, next) => {
  next();
};

// get all contact forms
router.get("/", async (req, res) => {
  const contactForms = await ContactForm.find();
  try {
    res.status(201).json(contactForms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// get single contact form
router.get("/:id", (req, res) => {});
// create single contact form
router.post("/", async (req, res) => {
  const newContactForm = await new ContactForm({
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message,
  });
  try {
    newContactForm.save();
    res.status(201).json(newContactForm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// delete single contact form
router.delete("/:id", (req, res) => {});
// update single contact form
router.patch("/:id", (req, res) => {});

module.exports = router;
