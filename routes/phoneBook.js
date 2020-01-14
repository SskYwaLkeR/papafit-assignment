const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/phonebook", () => {
  console.log("Database connected");
});

const phoneBookSchema = mongoose.Schema({
  contact: Array
});

module.exports = mongoose.model("phonebook", phoneBookSchema);
