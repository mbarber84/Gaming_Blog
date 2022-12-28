const router = require("express").Router();
const User = require("../models/Users");
const Posts = require("../models/Post");
const bcrypt = require("bcrypt");

// This code is a set of routes for a user in an Express.js application. The first route is a PUT request which updates the user's information, such as their password. It uses bcrypt to hash the password before saving it to the database. The second route is a DELETE request which deletes the user from the database, as well as any posts associated with them. The third route is a GET request which retrieves the user's information from the database, excluding their password. Finally, it exports the router so that it can be used in other parts of the application.

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
