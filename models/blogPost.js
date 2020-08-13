const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({});

module.exports = mongoose.model("blogPost", blogPostSchema);
