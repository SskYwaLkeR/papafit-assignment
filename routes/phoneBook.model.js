const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/phonebook", () => {
  console.log("Database connected");
});

const phoneBookSchema = mongoose.Schema({
  contacts: Array
});

module.exports = mongoose.model("phonebook", phoneBookSchema);
