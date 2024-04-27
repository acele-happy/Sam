// src/components/BookingForm.js

import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ eventId }) => {
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const handleBooking = () => {
    axios.post('/api/bookings', {
      eventId: eventId,
      userId: 'user123', // Assuming userId is hardcoded for simplicity
      numberOfTickets: numberOfTickets
    })
    .then(response => {
      // Handle successful booking
      console.log('Booking successful:', response.data);
    })
    .catch(error => {
      console.error('Error booking tickets:', error);
    });
  };

  return (
    <div>
      <h2>Book Tickets</h2>
      <label htmlFor="tickets">Number of Tickets:</label>
      <input
        type="number"
        id="tickets"
        value={numberOfTickets}
        onChange={e => setNumberOfTickets(parseInt(e.target.value))}
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default BookingForm;
