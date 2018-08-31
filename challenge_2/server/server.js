require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

//did not work
router.use("/", function(req, res, next) {
  console.log("Request Type:", req.method);
  next();
});

app.use("/", express.static(path.join(__dirname, "../dist")));

app.get("/", function(req, res) {
  res.send("hello world");
});

module.exports = app;
