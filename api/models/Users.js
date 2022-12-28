//This code is creating a Mongoose schema for a User model. The schema defines the fields that will be stored in the database for each user, such as username, email, password, and profilePicture. The required field indicates that these fields must be provided when creating a new user. The unique field indicates that the value of these fields must be unique across all users. The timestamps field indicates that Mongoose will automatically add createdAt and updatedAt timestamps to each user document. Finally, the code exports the User model so it can be used in other parts of the application.

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);