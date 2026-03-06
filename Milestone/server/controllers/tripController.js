// ...existing code...

exports.addBulkTrips = async (req, res) => {
  const tripsArray = req.body.trips;
  if (!Array.isArray(tripsArray)) {
    return res.status(400).json({ message: 'Payload must be an array of trips under "trips" key.' });
  }
  try {
    await Trip.insertMany(tripsArray);
    res.json({ message: 'Bulk trips added successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const Trip = require('../models/Trip');

exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    // Group trips by country for frontend compatibility
    const grouped = trips.reduce((acc, trip) => {
      if (!acc[trip.country]) acc[trip.country] = [];
      acc[trip.country].push({ name: trip.name, price: trip.price, image: trip.image });
      return acc;
    }, {});
    res.json(grouped);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createTrip = async (req, res) => {
  const { country, name, price, image } = req.body;
  try {
    const newTrip = new Trip({ country, name, price, image });
    await newTrip.save();
    res.json({ message: 'Trip created successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};