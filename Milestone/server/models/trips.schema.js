const mongoose = require("mongoose");

const tripsSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  image: String
});

module.exports = tripsSchema;
