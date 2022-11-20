const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require('bcrypt');

//Register
router.post("/register", async (req, res) => {
  try {

    const salt = await bcrypt.genSalt(10);//salting the password
    const hashedPass = await bcrypt.hash(req.body.password, salt);//hashing the password

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login

module.exports = router;
