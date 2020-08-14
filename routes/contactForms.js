const express = require("express");
const router = express();
const ContactForm = require("../models/contactForm");
const contactForm = require("../models/contactForm");

// find contact form by id, middleware function
let findContactForm = async (req, res, next) => {
  let contactForm;
  try {
    contactForm = await ContactForm.findById(req.params.id);
    if (contactForm == null) {
      return res.status(404).json({ message: "Cannot find that contact form" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.contactForm = contactForm;
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
router.get("/:id", findContactForm, (req, res) => {
  try {
    res.status(201).json(res.contactForm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
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
router.delete("/:id", findContactForm, async (req, res) => {
  try {
    await res.contactForm.remove();
    res.status(201).json({ message: "contact form deleted" });
  } catch (error) {
    res.status(500).json({ message: "contact for could not be deleted" });
  }
});
// update single contact form
router.patch("/:id", findContactForm, async (req, res) => {
  if (req.body.fullName != null) {
    res.contactForm.fullName = req.body.fullName;
  }
  if (req.body.phone != null) {
    res.contactForm.phone = req.body.phone;
  }
  if (req.body.email != null) {
    res.contactForm.email = req.body.email;
  }
  if (req.body.message != null) {
    res.contactForm.message = req.body.message;
  }

  try {
    const updatedContactForm = await res.contactForm.save();
    res.status(201).json(updatedContactForm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
