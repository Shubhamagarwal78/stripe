// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { setUser } from "../features/userSlice";
// import FormInput from "./FormInput";
// import FormButton from "./FormButton";

// const LoginForm = () => {
//   const { control, handleSubmit } = useForm();
//   const dispatch = useDispatch();

//   const onSubmit = (data) => {
//     dispatch(setUser(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <FormInput name="email" control={control} label="Email" rules={{ required: "Email is required" }} />
//       <FormInput name="password" control={control} label="Password" type="password" rules={{ required: "Password is required" }} />
//       <FormButton>Login</FormButton>
//     </form>
//   );
// };
// export default LoginForm;


import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setUser, logout } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log('Login data:', data);
 dispatch(setUser(data));
    navigate('/pay');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextField label="Email" {...register('email')} required fullWidth />
      <TextField label="Password" type="password" {...register('password')} required fullWidth />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>


      <Button
        variant="text"
        color="secondary"
        onClick={() => navigate('/register')}
      >
        Don't have an account? Register
      </Button>
    </form>
  );
};

export default LoginForm;