import React, { useState, useEffect } from 'react';
import { Box, Typography, Link } from '@mui/material';

import { useTranslation } from 'react-i18next';
import kyoceraBlackLogo from '../assets/img/kyocera-logo-black.png';

// @ts-ignore
import styles from '../assets/scss/styles.module.scss';

const Updated: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box component='section' className={styles.updatedSection}>
      <Typography className={styles.updateText}>
        {t('updatedAccount')}
      </Typography>
      <Link
        className={styles.updateLink}
        underline='hover'
        href='#'
        rel='noreferrer'>
        {t('backToApplication')}
      </Link>
      <br />
      <img
        src={kyoceraBlackLogo}
        alt='kyocera-logo-black'
        className={styles.kyoceraBlackLogoUp}
      />
    </Box>
  );
};

export default Updated;
