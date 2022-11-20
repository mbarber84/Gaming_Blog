const router = require("express").Router();
const User = require("../models/Users");
const Post = require("../models/Posts");

//Create new post
router.post("/", async (req, res) => {
  //Arrow function
  //.post method to post data
  const newPost = await new Post(req.body); //await = async
  try {
    const savedPost = newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update post
router.put("/:id", async (req, res) => {
  //put method updates the data //Arrow function
  try {
    const post = await Post.findById(req.params.id); //await = async
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          //await = async
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res
        .status(401)
        .json(
          "Something has gone wrong. You can only update posts on your account"
        );
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Post
router.delete("/:id", async (req, res) => {
  //delete method removes the data //Arrow function
  try {
    const post = await Post.findById(req.params.id); //await = async
    if (post.username === req.body.username) {
      try {
        await post.delete(); //await = async
        res.status(200).json("Your post has been removed.");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res
        .status(401)
        .json(
          "Something has gone wrong. You can only delete posts on your account"
        );
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Post
router.get("/:id", async (req, res) => {
  //Arrow function
  try {
    const post = await Post.findById(req.params.id); //await = async
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all posts
router.get("/", async (req, res) => { //Arrow function
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username }); //{username} == {username:username}  //await = async
    } else if (catName) {
      posts = await Post.find({ //await = async
        categories: {
          $in: [catName],
        },
      });
    }else{
        posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
