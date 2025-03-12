const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for frontend (localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(bodyParser.json());

/**
 * Rate Limiter Middleware
 * 
 * Limits the number of requests a client can make to prevent abuse.
 * - Allows a maximum of 15 requests per 15 minutes.
 * - Returns a 429 status code if the limit is exceeded.
 * - Provides a `retryAfter` field to inform the client when they can retry.
 */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 15,
  message: {
    status: 429,
    error: 'Too many requests',
    message: 'You have exceeded the maximum number of requests allowed. Please try again later.',
  },
  /**
   * Custom handler for rate limit exceeded responses.
   * Provides additional headers and information for better client handling.
   */
  handler: (req, res, next, options) => {
    const resetTime = Math.ceil((Date.now() + options.windowMs - Date.now() % options.windowMs) / 1000);
    res.status(429).json({
      status: 429,
      error: 'Too many requests',
      message: 'You have exceeded the maximum number of requests allowed. Please try again later.',
      retryAfter: resetTime,
      rateLimit: {
        limit: options.max,
        remaining: 0,
        reset: resetTime,
      },
    });
  },
  headers: true,
});

app.use(limiter);

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});