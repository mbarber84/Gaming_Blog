const router = require("express").Router();
const Category = require("../models/Category");

//This code is a part of an Express.js router that handles requests for a Category resource. The first block of code is a POST request handler that creates a new Category object from the request body and saves it to the database. The second block of code is a GET request handler that retrieves all categories from the database and sends them back in the response. Finally, the router is exported so it can be used in other parts of the application.

router.post("/", async (req, res)=> {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//All categories
router.get("/", async (req, res)=> {
    try {
      const cats = await Category.find();
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
