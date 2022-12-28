const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

//This code is setting up an Express server. It is using the dotenv package to configure environment variables, the express.json() middleware to parse JSON data, and the express.static() middleware to serve static files from a directory. It is also connecting to a MongoDB database using Mongoose, setting up Multer for file uploads, and defining routes for authentication, users, posts, and categories. Finally, it is listening on port 5000 and logging a message when the server is connected.

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images"))); //  This code is setting up an Express server. The first line, dotenv.config(), is loading environment variables from a .env file. The second line, app.use(express.json()), is enabling the Express server to parse JSON data sent to it. The third line, app.use("/images", express.static(path.join(__dirname, "/images"))), is setting up a static file server for images located in the /images directory relative to the current directory (__dirname).

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err)); // This code is using the Mongoose library to connect to a MongoDB database. The connection is established using the environment variable MONGO_URL, which contains the URL of the MongoDB database. The useNewUrlParser and useUnifiedTopology options are set to true, which enables Mongoose to parse the URL correctly and use a new server discovery and monitoring engine, respectively. Finally, a success message is logged if the connection is successful, or an error message is logged if there is an issue connecting. //Arrow function 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
}); //This code is setting up a disk storage system for multer, which is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. The destination function sets the destination folder to "images" and the filename function sets the filename to whatever is in the request body's name field.

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("You file has been uploaded");
}); // This code is using the multer library to upload a single file to an API endpoint. The multer library is used to handle multipart/form-data, which is the type of data that files are typically sent as. The first line sets up the storage option for multer, which specifies where the uploaded file should be stored. The second line creates a POST endpoint at /api/upload that will accept a single file as part of the request body. When this endpoint is called, multer will handle the file upload and store it according to the storage option specified in the first line. Finally, when the upload is complete, a response of "You file has been uploaded" will be sent back to the client.

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute); // This code is setting up routes for an Express.js application. The app.use() function is used to define routes in Express.js applications. In this code, the app is setting up four routes: "/api/auth", "/api/users", "/api/posts", and "/api/categories". Each route is associated with a different route file (authRoute, userRoute, postRoute, and categoryRoute). This means that when a request is made to one of these routes, the corresponding route file will be used to handle the request.

app.listen("5000", () => {
  console.log("Backend is connected");
});
