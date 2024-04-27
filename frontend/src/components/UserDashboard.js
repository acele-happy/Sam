// src/components/UserDashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  const handleCancelBooking = (bookingId) => {
    axios.delete(`/api/bookings/${bookingId}`)
      .then(response => {
        // Handle successful cancellation
        console.log('Booking cancelled:', response.data);
        // Refresh bookings after cancellation
        axios.get('/api/bookings')
          .then(response => {
            setBookings(response.data);
          })
          .catch(error => {
            console.error('Error fetching bookings:', error);
          });
      })
      .catch(error => {
        console.error('Error cancelling booking:', error);
      });
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <h3>Your Bookings</h3>
      <ul>
        {bookings.map(booking => (
          <li key={booking._id}>
            Event: {booking.eventId} - Tickets: {booking.numberOfTickets}
            <button onClick={() => handleCancelBooking(booking._id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
