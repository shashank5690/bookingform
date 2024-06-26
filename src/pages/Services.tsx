// src/pages/Services.tsx
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { CustomTextField, CustomButton } from '../styles';
import { IFormInputVehicle } from '../types/interfaces';

const schema = yup.object().shape({
  vehicleType: yup.string().required('Vehicle Type is Required'),
  vehicleModel: yup.string().required('Vehicle Model is Required'),
});

const vehicleTypes = ["car" , "bike", "Truck", "JCB", "Taxi", "Bus"];

const Services: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInputVehicle>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputVehicle> = data => {
    localStorage.setItem('vehicleDetails', JSON.stringify(data));
    navigate('/bookingdetails');
  };

  return (
    <Container maxWidth="sm">
      <h1 className='heading'>Vehicle Details form :</h1>
      <h2 className='headingsub'>:::Enter the details for vehicles:::</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl variant='outlined' fullWidth margin='normal' className='custom-textfield'>
        <InputLabel>Vehicle Type</InputLabel>
        <Controller
          name='vehicleType'
          control={control}
          render={({ field }) => (
              <Select 
              {...field}
              label="Vehicle Type"
              error={!!errors.vehicleType}
              placeholder='Vehile Type'
              fullWidth
            >
             {vehicleTypes.map((type) => (
              <MenuItem key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
              </MenuItem>
             ))}
             </Select>
          )}
        />
        </FormControl>
        <Controller
          name='vehicleModel'
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              label="Vehicle Model"
              error={!!errors.vehicleModel}
              helperText={errors.vehicleModel?.message}
              fullWidth
              margin="normal"
              variant="outlined"
              placeholder="Enter the vehicle model"
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

export default Services;
