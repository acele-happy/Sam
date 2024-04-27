// routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// Add new booking
router.post('/bookings', async (req, res) => {
  const booking = new Booking({
    eventId: req.body.eventId,
    userId: req.body.userId,
    numberOfTickets: req.body.numberOfTickets
  });
  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// More routes can be added for fetching and cancelling bookings

module.exports = router;
