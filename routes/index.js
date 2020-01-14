const express = require("express");
const router = express.Router();
const phoneBookModel = require("./phoneBook");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index");
});

//Get all phonebook data
router.get("/viewAll", (req, res) => {
  phoneBookModel
    .find()
    .then(contact => {
      res.render("phonebook", { contact });
    })
    .catch(err => res.send(`oops error occurred at ${err}`));
});

// post route to create new contacts

router.post("/addPhone", (req, res) => {
  phoneBookModel
    .create({
      contact: {
        name: req.body.contactName,
        number: req.body.contactNumber
      }
    })
    .then(contact => {
      console.log(contact);
      res.redirect("/viewAll");
    })
    .catch(err => res.send(`Opps error occurred at ${err}`));
});

// Delete route

router.get("/delete/:id", (req, res) => {
  phoneBookModel
    .findOneAndDelete({ _id: req.params.id })
    .then(contact => res.redirect("/viewALl"))
    .catch(err => res.send(`Opps error occurred at ${err}`));
});

module.exports = router;
