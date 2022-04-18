import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import kyoceraBlackLogo from '../assets/img/kyocera-logo-black.png';
import { useRecoilValue } from 'recoil';
import { appRealm } from '../../../recoil/atoms';
// @ts-ignore
import styles from '../assets/scss/styles.module.scss';

const ProfileUpdate: React.FC = () => {
  const { t, i18n } = useTranslation();
  const realm = useRecoilValue(appRealm);

  return (
    <Box component='section' className={styles.update}>
      <Typography className={styles.updateText}>
        {t('ActionUPDATE')}
        <b>{` ${t('requiredActionUPDATE_PROFILE')}, ${t(
          'requiredActionUPDATE_PASSWORD'
        )}`}</b>
      </Typography>
      <Link
        className={styles.updateLink}
        to={`/auth/${realm}/login-actions/update-password`}
        rel='noreferrer'>
        {t('ActionUpdateLink')}
      </Link>
      <br />
      <img
        src={kyoceraBlackLogo}
        alt='kyocera-logo-black'
        className={styles.kyoceraBlackLogoPU}
      />
    </Box>
  );
};

export default ProfileUpdate;
