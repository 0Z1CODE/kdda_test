import React from 'react';
import { Card, Box } from '@mui/material';
import ResetPasswordComponent from '../components/ResetPasswordComponent/ResetPasswordComponent'

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
          <ResetPasswordComponent />
        </Box>
      </Card>
    </>
  );
};

export default ForgotPasswordPage;
