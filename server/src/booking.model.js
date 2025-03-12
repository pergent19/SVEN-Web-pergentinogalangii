const pool = require("./config");

/**
 * Creates a new booking and inserts it into the database.
 * 
 * @param {string} frequency - The frequency of the booking (e.g., recurring, one time).
 * @param {string} start_date - The starting date of the booking in YYYY-MM-DD format.
 * @param {Array<string>} days - An array of days the booking occurs (e.g., ["Monday", "Wednesday"]).
 * @param {string} time - The time of the booking (e.g., "Morning").
 * @param {string} notes - Additional notes or remarks for the booking.
 * 
 * @returns {Promise<Object>} - Returns the newly created booking record.
 * 
 * The function inserts a new booking into the `bookings` table and returns the inserted record.
 * It converts the `days` array into a comma-separated string before inserting it into the database (e.g., "monday,wednesday").
 */
const createBooking = async (frequency, start_date, days, time, notes) => {

  const daysString = days.join(',');

  const result = await pool.query(
    "INSERT INTO bookings (frequency, start_date, days, time, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [frequency, start_date, daysString, time, notes]
  );
  return result.rows[0];
};

/**
 * Retrieves all bookings from the database.
 * 
 * @returns {Promise<Array<Object>>} - Returns an array of all booking records.
 * 
 * The function queries the `bookings` table and retrieves all records.
 */
const getAllBookings = async () => {
  const result = await pool.query("SELECT * FROM bookings");
  return result.rows;
};

module.exports = { createBooking, getAllBookings };
