const express = require("express");
const router = express();
const BlogPost = require("../models/blogPost");

// find blog post by id
let findBlogPost = async (req, res, next) => {
  let blogPost;
  try {
    blogPost = await BlogPost.findById(req.params.id);
    if (blogPost == null) {
      return res
        .status(404)
        .json({ message: "That blog post could not be found." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.blogPost = blogPost;
  next();
};

// get all blog posts
router.get("/", async (req, res) => {
  try {
    const users = await BlogPost.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get single blog post
router.get("/:id", findBlogPost, (req, res) => {
  try {
    res.status(201).json(res.blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create single blog post
router.post("/", async (req, res) => {
  const blogPost = new BlogPost({
    topic: req.body.topic,
    creator: req.body.creator,
    publisher: req.body.publisher,
    headline: req.body.headline,
    mainBody: req.body.mainBody,
    link: req.body.link,
    private: req.body.private,
  });
  try {
    const newBlogPost = await blogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete single blog post
router.delete("/:id", findBlogPost, async (req, res) => {
  try {
    await res.blogPost.remove();
    res.status(201).json({ message: "blog post deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update single blog post
router.patch("/:id", findBlogPost, async (req, res) => {
  if (req.body.topic != null) {
    res.blogPost.topic = req.body.topic;
  }
  if (req.body.createdOn != null) {
    res.blogPost.createdOn = req.body.createdOn;
  }
  if (req.body.creator != null) {
    res.blogPost.creator = req.body.creator;
  }
  if (req.body.publisher != null) {
    res.blogPost.publisher = req.body.publisher;
  }
  if (req.body.headline != null) {
    res.blogPost.headline = req.body.headline;
  }
  if (req.body.mainBody != null) {
    res.blogPost.mainBody = req.body.mainBody;
  }
  if (req.body.link != null) {
    res.blogPost.link = req.body.link;
  }
  if (req.body.private != null) {
    res.blogPost.private = req.body.private;
  }
  try {
    const updatedBlogPost = await res.blogPost.save();
    res.status(201).json(updatedBlogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
