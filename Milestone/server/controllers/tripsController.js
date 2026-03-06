const Trips = require("../models/Trips.js");

const getTrips = async (req, res) => {
  try {
    const trips = await Trips.find();
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const createTrip = async (req, res) => {
  const { name, location, description, image } = req.body;
  try {
    const newTrip = new Trips({ name, location, description, image });
    await newTrip.save();
    res.json({ message: "Trip created successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const addBulkTrips = async (req, res) => {
  const tripsArray = req.body.trips;
  if (!Array.isArray(tripsArray)) {
    return res.status(400).json({ message: 'Payload must be an array of trips under "trips" key.' });
  }
  try {
    await Trips.insertMany(tripsArray);
    res.json({ message: 'Bulk trips added successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getTrips,
  createTrip,
  addBulkTrips
};
