const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("contactForm", contactFormSchema);
