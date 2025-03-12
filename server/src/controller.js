const { createBooking, getAllBookings } = require('./booking.model');
const { validationResult } = require('express-validator');


/**
 * Handles the creation of a new booking.
 * 
 * @param {Object} req - The request object containing the HTTP request data.
 * @param {Object} res - The response object used to send back HTTP responses.
 * 
 * @returns {void} - Sends a response to the client.
 * 
 * The function first checks for validation errors in the request body using `express-validator`.
 * If validation fails, it responds with a `400` status and an array of error messages.
 * If validation passes, it extracts the relevant data (`frequency`, `start_date`, `days`, `time`, `notes`) from the request body.
 * Then, it attempts to create a new booking by calling the `createBooking` function from the model. 
 * If successful, it responds with a `201` status and the newly created booking.
 * In case of any errors, it logs the error and responds with a `500` status and an error message.
 */
const createBookingHandler = async (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { frequency, start_date, days, time, notes } = req.body;
  try {
    const newBooking = await createBooking(frequency, start_date, days, time, notes);

    res.status(201).json({message: "Successfully Created",newBooking});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating booking' });
  }
};

/**
 * Handles retrieving all bookings.
 * 
 * @param {Object} req - The request object containing the HTTP request data.
 * @param {Object} res - The response object used to send back HTTP responses.
 * 
 * @returns {void} - Sends a response to the client with the list of bookings.
 * 
 * The function attempts to fetch all bookings by calling the `getAllBookings` function from the model.
 * If successful, it responds with a `200` status and the retrieved bookings.
 * In case of any errors, it logs the error and responds with a `500` status and an error message.
 */
const getAllBookingsHandler = async (req, res) => {
  try {
    const bookings = await getAllBookings();
    res.status(200).json({ message: 'Getting all bookings successfully!', bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching bookings' });
  }
};

module.exports = {
  createBookingHandler,
  getAllBookingsHandler
};