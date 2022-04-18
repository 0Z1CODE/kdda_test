import React from 'react';
import { Card, Box } from '@mui/material';
import UpdatedComponent from '../components/UpdatedComponent/UpdatedComponent';

const UpdatedPage: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          overflow: 'visible',
        }}>
        <Box>
          <UpdatedComponent />
        </Box>
      </Card>
    </>
  );
};

export default UpdatedPage;
