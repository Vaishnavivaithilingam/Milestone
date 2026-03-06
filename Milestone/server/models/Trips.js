const mongoose = require("mongoose");
const tripsSchema = require("./trips.schema.js");

const Trips = mongoose.model("trips_project", tripsSchema);

module.exports = Trips;
