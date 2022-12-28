//This code is setting up a Mongoose Schema for a Category model. The schema defines the structure of the data that will be stored in the database. It includes a name field which is required and of type String. The timestamps option will add two additional fields to the document, createdAt and updatedAt, which will store timestamps indicating when the document was created and last updated. Finally, it exports the model so that it can be used in other parts of the application.

const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
