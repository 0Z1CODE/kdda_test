import React from 'react';
import { Card, Box } from '@mui/material';
import ProfileUpdateComponent from '../components/ProfileUpdateComponent/ProfileUpdateComponent';

const ProfileUpdatePage: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          overflow: 'visible',
        }}>
        <Box>
          <ProfileUpdateComponent />
        </Box>
      </Card>
    </>
  );
};

export default ProfileUpdatePage;
