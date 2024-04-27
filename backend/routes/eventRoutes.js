// routes/eventRoutes.js

const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// Get all events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new event
router.post('/events', async (req, res) => {
  const event = new Event({
    title: req.body.title,
    date: req.body.date,
    location: req.body.location,
    ticketsAvailable: req.body.ticketsAvailable
  });
  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// More routes can be added for updating and deleting events

module.exports = router;
