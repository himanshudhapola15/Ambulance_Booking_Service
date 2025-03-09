const express = require('express');
const router = express.Router();
const ambulanceBookingController = require('../controllers/ambulanceBookingController');


router.post('/request', ambulanceBookingController.requestAmbulanceBooking);

module.exports = router;

