import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../features/userSlice';
import FormInput from './FormInput';
import FormButton from './FormButton';

const RegisterForm = () => {
  const { control, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(`HERE`);
    
    dispatch(setUser(data));
    alert('User registered successfully!');
    reset();
    navigate('/'); // Navigate to login page after registration
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <FormInput
        name="name"
        control={control}
        label="Full Name"
        rules={{ required: 'Name is required' }}
      />
      <FormInput
        name="email"
        control={control}
        label="Email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email address',
          },
        }}
      />
      <FormInput
        name="password"
        control={control}
        label="Password"
        type="password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        }}
      />
      <FormButton>Register</FormButton>
    </form>
  );
};

export default RegisterForm;