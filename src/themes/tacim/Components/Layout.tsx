import React from 'react';
import { Box } from '@mui/material';
import Header from './Common/Header';
import Footer from './Common/Footer';
import tacimLogo from './../assets/img/tacim-text-logo.png';
import logoKCIM from './../assets/img/KCIM-logo-blue.png';
// @ts-ignore
import styles from '../assets/scss/styles.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Box component='main' className={styles.main}>
        <Box component='section' className={styles.section}>
          <img
            src={tacimLogo}
            alt='licim-logo'
            className={styles.litedmsLogo}
          />
          <img src={logoKCIM} alt='KCIM-logo' className={styles.logoKCIM} />
          <Box component='section'>{children}</Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
