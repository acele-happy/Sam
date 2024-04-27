// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import BookingForm from './components/BookingForm';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={EventList} />
          <Route exact path="/events/:id" component={EventDetails} />
          <Route exact path="/book/:id" component={BookingForm} />
          <Route exact path="/dashboard" component={UserDashboard} />
          <Route exact path="/admin" component={AdminDashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
