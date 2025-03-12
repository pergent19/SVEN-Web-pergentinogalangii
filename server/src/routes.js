const express = require('express');
const {
  createBookingHandler,
  getAllBookingsHandler,
} = require('./controller');
const { createBookingValidator } = require('./validator/bookingValidator');

const router = express.Router();

/**
 * @route   POST /api/bookings
 * @desc    Create a new booking
 * @access  Public
 * @middleware createBookingValidator - Validates request data before passing it to the handler
 * @handler createBookingHandler - Processes the booking creation logic
 */
router.post('/bookings', createBookingValidator, createBookingHandler);
/**
 * @route   GET /api/bookings
 * @desc    Retrieve all bookings
 * @access  Public
 * @handler getAllBookingsHandler - Fetches all bookings from the database
 */
router.get('/bookings', getAllBookingsHandler);

module.exports = router;