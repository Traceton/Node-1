const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: false,
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  creator: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: false,
  },
  headline: {
    type: String,
    required: true,
  },
  mainBody: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  private: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("blogPost", blogPostSchema);
