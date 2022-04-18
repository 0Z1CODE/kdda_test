import React, { Suspense, useEffect, useState } from 'react';
import { Card, Box } from '@mui/material';
import SignInComponent from '../components/SignInComponent/SignInComponent';

const SignInPage: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          overflow: 'visible',
        }}>
        <Box>
          <SignInComponent />
        </Box>
      </Card>
    </>
  );
};

export default SignInPage;
