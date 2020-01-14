const express = require("express");
const router = express.Router();
const phoneBookModel = require("./phoneBook.model");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index");
});

module.exports = router;
