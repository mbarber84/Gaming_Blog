const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt"); // Bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher. It is a way of encrypting passwords so that they are secure and can't be easily decrypted. Bcrypt uses a salt to add an extra layer of security to the encryption process, making it harder for hackers to crack passwords. Bcrypt is considered one of the most secure methods of password encryption available today.

//Register
//This code is for a user registration and login system. The first block of code is for registering a new user. It takes the username, email, and password from the request body and uses bcrypt to salt and hash the password. It then creates a new User object with the username, email, and hashed password and saves it to the database. The second block of code is for logging in an existing user. It finds the user in the database by their username, then compares the entered password with the hashed password stored in the database using bcrypt. If they match, it returns all of the user's information except for their password. Finally, it exports this router so that it can be used elsewhere in the application.
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
