const router = require("express").Router();
const User = require("../models/Users");
const Posts = require("../models/Posts");
const bcrypt = require("bcrypt");

//Update User
router.put("/:id", async (req, res) => {
  //Arrow function
  //.put method to update
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10); //await = async
      req.body.password = await bcrypt.hash(req.body.password, salt); //await = async
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your own account!");
  }
});

//Delete user
router.delete("/:id", async (req, res) => {
  //delete method removes the data //Arrow function
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id); //await = async
      try {
        await Posts.deleteMany({ user: user.username }); //await = async
        await User.findByIdAndDelete(req.params.id); //await = async
        res.status(200).json("User has been deleted!");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("You can only delete your own account!");
  }
});

//Get User
router.get("/:id", async (req, res) => {
  //Arrow function
  try {
    const user = await User.findById(req.params.id); //await = async
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
