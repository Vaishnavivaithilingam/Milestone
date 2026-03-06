const express = require("express");
const { getTrips, createTrip, addBulkTrips } = require("../controllers/tripsController.js");

const router = express.Router();

router.get("/tripsPage", getTrips);
router.post("/tripsPage", createTrip);
router.post("/tripsPage/bulk", addBulkTrips);

module.exports = router;
