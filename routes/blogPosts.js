const express = require("express");
const router = express();
const BlogPost = require("../models/blogPost");

// get all blog posts
router.get("/", (req, res) => {
  res.send(`<h1>Blog Posts</h1>`);
});

// get single blog post
router.get("/:id", (req, res) => {});

// create single blog post
router.post("/", (req, res) => {});

// delete single blog post
router.delete("/:id", (req, res) => {});

// update single blog post
router.patch("/:id", (req, res) => {});

module.exports = router;
