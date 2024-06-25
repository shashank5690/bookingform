// src/pages/BookingDetails.tsx
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { CustomTextField, CustomButton } from '../styles';
import { IFormInputBooking } from '../types/interfaces';

const schema = yup.object().shape({
  appointmentDate: yup.string().required('Appointment Date is Required'),
  appointmentTime: yup.string().required('Appointment Time is Required'),
});

const BookingDetails: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInputBooking>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputBooking> = data => {
    // console.log(data)
    localStorage.setItem('bookingDetails', JSON.stringify(data));
    navigate('/thankyou');
  };

  return (
    <Container maxWidth="sm">
      <h1 className='heading'>Booking Details</h1>
      <h2 className='headingsub'>Schedule your appointment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='appointmentDate'
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              label="Appointment Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              error={!!errors.appointmentDate}
              helperText={errors.appointmentDate?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name='appointmentTime'
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              label="Appointment Time"
              type="time"
              InputLabelProps={{ shrink: true }}
              inputProps={{ step: 1800 }} // 30 min
              error={!!errors.appointmentTime}
              helperText={errors.appointmentTime?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <CustomButton type="submit" variant="contained">
          Book
        </CustomButton>
      </form>
    </Container>
  );
};

export default BookingDetails;
