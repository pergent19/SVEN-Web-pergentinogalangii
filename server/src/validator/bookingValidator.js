const { body } = require("express-validator");

/**
 * Middleware to validate booking creation request data.
 *
 * This validation middleware checks that required fields are present
 * and formatted correctly before processing a new booking.
 */
const createBookingValidator = [
  /**
   * Validates the 'frequency' field.
   *
   * - Required (cannot be empty).
   * - Must be one of the allowed values: 'recurring', 'onetime''.
   */
  body("frequency")
    .notEmpty()
    .withMessage("Frequency is required")
    .isIn(["recurring", "one time"])
    .withMessage('Frequency must be "recurring", or "one time"'),
  /**
   * Validates the 'start_date' field.
   * 
   * - Required (cannot be empty).
   * - Must be a valid date.
   * - Cannot be a past date.
   */
  body("start_date")
    .notEmpty()
    .withMessage("Start date is required")
    .isDate()
    .withMessage("Start date must be a valid date")
    .custom((value) => {
      const currentDate = new Date();
      const startDate = new Date(value);

      if (startDate < currentDate) {
        throw new Error("Start date cannot be in the past");
      }
      return true;
    }),
  /**
   * Validates the 'days' field.
   * 
   * - Must be an array.
   * - Must contain at least one value.
   */
  body("days")
    .isArray()
    .withMessage("Days should be an array")
    .custom((value) => value.length > 0)
    .withMessage("At least one day should be provided"),
  /**
   * Validates the 'time' field.
   * 
   * - Required (cannot be empty).
   * - Must be a valid string.
   */
  body("time")
    .notEmpty()
    .withMessage("Time is required")
    .isString()
    .withMessage("Time must be a valid string"),
  /**
   * Validates the 'notes' field.
   * 
   * - Optional field.
   * - If provided, it must be a valid string.
   */
  body("notes")
    .optional()
    .isString()
    .withMessage("Notes must be a valid string if provided"),
];

module.exports = { createBookingValidator };
