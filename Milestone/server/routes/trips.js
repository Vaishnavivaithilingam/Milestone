const express = require('express');
const router = express.Router();
const { getTrips, createTrip, addBulkTrips } = require('../controllers/tripController');


router.get('/trips', getTrips);
router.post('/trips', createTrip);
router.post('/trips/bulk', addBulkTrips);

module.exports = router;
