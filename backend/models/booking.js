// models/booking.js

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  numberOfTickets: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
