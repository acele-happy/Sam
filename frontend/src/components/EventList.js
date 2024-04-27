// src/components/EventList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            {event.title} - {event.date} - {event.location} - Tickets Available: {event.ticketsAvailable}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
