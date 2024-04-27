// src/components/AdminDashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });

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
      <h2>Admin Dashboard</h2>
      <h3>Events</h3>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            {event.title} - {event.date} - {event.location} - Tickets Available: {event.ticketsAvailable}
          </li>
        ))}
      </ul>
      <h3>All Bookings</h3>
      <ul>
        {bookings.map(booking => (
          <li key={booking._id}>
            User: {booking.userId} - Event: {booking.eventId} - Tickets: {booking.numberOfTickets}
            <button onClick={() => handleCancelBooking(booking._id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
