// src/components/EventDetails.js

import React from 'react';

const EventDetails = ({ event }) => {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Tickets Available: {event.ticketsAvailable}</p>
    </div>
  );
};

export default EventDetails;
