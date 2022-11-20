const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req, res) => { //post send the data //Arrow function
  try {
    const salt = await bcrypt.genSalt(10); //salting the password  //await = async
    const hashedPass = await bcrypt.hash(req.body.password, salt); //hashing the password  //await = async

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save(); //await = async
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => { //post send the data //Arrow function
  try {
    const user = await User.findOne({username: req.body.username}); //await = async
    !user && res.status(400).json("Wrong Details Entered!");

    const validated = await bcrypt.compare(req.body.password, user.password); //await = async
    !validated && res.status(400).json("Wrong Details Entered!");

    const {password, ...others} = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
