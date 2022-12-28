//  This code is creating a Mongoose Schema for a Post object. The Post object will have the following properties: title (required, unique), desc (required), photo (not required), username (required) and categories (not required). The timestamps property is set to true, which means that Mongoose will automatically add createdAt and updatedAt timestamps to the Post object. Finally, the PostSchema is exported as a Mongoose model.

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
        type: Array,
        required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
