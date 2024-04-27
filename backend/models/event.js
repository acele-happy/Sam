// models/event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  ticketsAvailable: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Event', eventSchema);
