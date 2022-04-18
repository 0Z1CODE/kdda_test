import React from 'react';
import { Card, Box } from '@mui/material';
import FirstLoginComponent from '../components/FirstLoginComponent/FirstLoginComponent';

const FirstLoginPage: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          overflow: 'visible',
        }}>
        <Box>
          <FirstLoginComponent />
        </Box>
      </Card>
    </>
  );
};

export default FirstLoginPage;
