import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import '../../../i18n/i18n';
import kyoceraBlackLogo from '../assets/img/kyocera-logo-black.png';

// @ts-ignore
import styles from '../assets/scss/styles.module.scss';

type FormData = {
  username: string;
};

const ForgotPasswordComponent: React.FC = (props) => {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <Box component='form' className={styles.form}>
        <TextField
          autoFocus
          variant='standard'
          className={styles.forgotInput}
          placeholder={t('username')}
          InputProps={{
            disableUnderline: true,
          }}
          size='small'
          {...register('username')}
        />

        <Button
          variant='contained'
          disableRipple
          className={styles.forgotButton}
          onClick={onSubmit}>
          {t('doSubmit')}
        </Button>
        <p className={styles.textSingInAsk}>
          {t('alreadyHaveAnAccount')}
          <NavLink to='/auth' className={styles.linkSingIn}>
            {t('doLog_In')}
          </NavLink>
        </p>
        <img
          src={kyoceraBlackLogo}
          alt='kyocera-logo-black'
          className={styles.kyoceraBlackLogo}
        />
      </Box>
    </>
  );
};

export default ForgotPasswordComponent;
