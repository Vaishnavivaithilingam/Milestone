const express = require("express");
const { getDestinations, createDestination, addBulkDestinations } = require("../controllers/destinationController.js");

const router = express.Router();

router.get("/destinations", getDestinations);
router.post("/destinations", createDestination);
router.post("/destinations/bulk", addBulkDestinations);

module.exports = router;
