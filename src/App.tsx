import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import BookingDetails from "./pages/BookingDetails";
import ThankYou from './pages/ThankYou';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/bookingdetails" element={<BookingDetails />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
};

export default App;
