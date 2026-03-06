const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  country: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Trip', tripSchema);
