// src/pages/Home.tsx
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { CustomTextField, CustomButton } from '../styles';
import '../index.css';
import { IFormInput } from '../types/interfaces';

const schema = yup.object().shape({
  name: yup.string().required('Name is Required'),
  email: yup.string().email('Invalid email').required('Email is Required'),
  phoneNumber: yup.string().required('Phone Number is Required'),
  address: yup.string().required('Address is Required'),
});

const Home: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    localStorage.setItem('personalDetails', JSON.stringify(data));
    navigate('/services');
  };

  return (
    <Container maxWidth="sm">
      <h1 className="heading">Welcome To Noway Tour & Travels</h1>
      <h2 className="headingsub">Enter Your Details:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <CustomTextField 
              {...field}
              label="Name"
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
              margin='normal'
              variant="outlined"
              placeholder="Enter your name"
              className="custom-textfield"
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              label="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              margin="normal"
              variant="outlined"
              placeholder="Enter your email"
              className="custom-textfield"
            />
          )}
        />
        <Controller
          name='phoneNumber'
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              label="Phone Number"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
              fullWidth
              margin="normal"
              variant="outlined"
              placeholder="Enter your phone number"
              className="custom-textfield"
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              label="Address"
              error={!!errors.address}
              helperText={errors.address?.message}
              fullWidth
              margin="normal"
              variant="outlined"
              placeholder="Enter your address"
              className="custom-textfield"
            />
          )}
        />
        <CustomButton type="submit" variant="contained">
          Next
        </CustomButton>
      </form>
    </Container>
  );
};

export default Home;
