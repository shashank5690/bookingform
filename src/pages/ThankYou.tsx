import React from 'react';
import { Container } from '@mui/material';

const ThankYou: React.FC = () => {
  const personalDetails = JSON.parse(localStorage.getItem('personalDetails') || '{}');
  const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails') || '{}');

  return (
    <Container maxWidth="sm">
      <h1 className='heading' >Thank You</h1>
      <h2 className='headingsub'>
        Hi {personalDetails.name}, your booking is scheduled at {bookingDetails.appointmentDate} {bookingDetails.appointmentTime}. Big thanks!
        </h2>
    </Container>
  );
};

export default ThankYou;
