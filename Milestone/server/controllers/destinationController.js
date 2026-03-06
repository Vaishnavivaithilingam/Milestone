const Destination = require("../models/Destination.js");

const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const createDestination = async (req, res) => {
  const { name, country, description, image } = req.body;
  try {
    const newDestination = new Destination({ name, country, description, image });
    await newDestination.save();
    res.json({ message: "Destination created successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const addBulkDestinations = async (req, res) => {
  const destinationsArray = req.body.destinations;
  if (!Array.isArray(destinationsArray)) {
    return res.status(400).json({ message: 'Payload must be an array of destinations under "destinations" key.' });
  }
  try {
    await Destination.insertMany(destinationsArray);
    res.json({ message: 'Bulk destinations added successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getDestinations,
  createDestination,
  addBulkDestinations
};
