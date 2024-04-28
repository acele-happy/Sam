// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import BookingForm from './components/BookingForm';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" component={EventList} />
          <Route exact path="/events/:id" component={EventDetails} />
          <Route exact path="/book/:id" component={BookingForm} />
          <Route exact path="/dashboard" component={UserDashboard} />
          <Route exact path="/admin" component={AdminDashboard} />
        </Routes>
    </Router>
  );
};

export default App;
