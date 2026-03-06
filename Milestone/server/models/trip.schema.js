const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
  name: String,
  location: String
});

const Trip = mongoose.model("trip_project", tripSchema);

export default Trip;
