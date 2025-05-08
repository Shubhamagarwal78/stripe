import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PayPage = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate payment success
    alert('Payment successful!');
    navigate('/todo'); // ⬅ Go to Todo page after "payment"
  };

  return (
    <div className="space-y-4 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">Payment Page</h2>
     
      <Button variant="contained" color="primary" onClick={handlePayment}>
        Make Payment
      </Button>
    </div>
  );
};

export default PayPage;