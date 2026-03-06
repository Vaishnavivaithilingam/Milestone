const mongoose = require("mongoose");
const destinationSchema = require("./destination.schema.js");

const Destination = mongoose.model("destination_project", destinationSchema);

module.exports = Destination;
