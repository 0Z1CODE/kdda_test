import React from 'react';
import { Card, Box } from '@mui/material';
import ForgotPasswordComponent from '../components/ForgotPasswordComponent/ForgotPasswordComponent';

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          overflow: 'visible',
        }}>
        <Box>
          <ForgotPasswordComponent />
        </Box>
      </Card>
    </>
  );
};

export default ForgotPasswordPage;
