const express = require("express");
const router = express();
const BlogPost = require("../models/blogPost");

// find blog post by id
let findBlogPost = async () => {};

// get all blog posts
router.get("/", (req, res) => {});

// get single blog post
router.get("/:id", (req, res) => {});

// create single blog post
router.post("/", (req, res) => {});

// delete single blog post
router.delete("/:id", (req, res) => {});

// update single blog post
router.patch("/:id", (req, res) => {});

module.exports = router;
