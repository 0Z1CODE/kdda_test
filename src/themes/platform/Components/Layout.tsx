import React from 'react';
import { Box } from '@mui/material';
import Header from './Common/Header';
import Footer from './Common/Footer';
import kyoceraLogo from './../assets/img/kyocera-logo.png';
import ppLogo from './../assets/img/providerPortalLogo.png';
// @ts-ignore
import styles from './../assets/scss/styles.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Box component='main' className={styles.main}>
        <Box component='section' className={styles.section}>
          <img
            src={kyoceraLogo}
            alt='provider-portal-logo'
            className={styles.kyoceraLogo}
          />
          <img
            src={ppLogo}
            alt='provider-portal-logo'
            className={styles.ppLogo}
          />
          <Box component='section'>{children}</Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
