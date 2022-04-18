import React, { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import TooltipReq, { validUser } from '../../../components/Tooltips/TooltipReq';
import kyoceraBlackLogo from '../assets/img/kyocera-logo-black.png';

import { useTranslation } from 'react-i18next';

// @ts-ignore
import styles from '../assets/scss/styles.module.scss';

type FormData = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};

const FirstLogin: React.FC = (props) => {
  const { t, i18n } = useTranslation();
  //@ts-ignore
  const {userData, onSub, setNewUserCred} = props;

  const { register, handleSubmit, watch, setValue } = useForm<FormData>();

  const formValues = watch(['email', 'firstName', 'lastName']);
  const username = validUser(watch('username'));
  const disabledSubmit = !username || !formValues.every((el) => el?.length);


  //Init Default Values
  useEffect(() => {
    if (userData) {
      Object.keys(userData).map((key) => {
        //@ts-ignore
        setValue(key, userData[key] || null);
      });
    }
  }, [userData]);

  return (
    <Box component='form' className={styles.form} onSubmit={handleSubmit(onSub)}>
     <TooltipReq username={username} transtalor={t}>
        <TextField
          autoFocus
          variant='standard'
          className={styles.firstLoginInput}
          placeholder={t('username')}
          {...register('username')}
          size='small'
          InputProps={{
            disableUnderline: true,
          }}
        />
      </TooltipReq>
      <TextField
        variant='standard'
        className={styles.firstLoginInput}
        placeholder={t('email')}
        {...register('email')}
        size='small'
        InputProps={{
          disableUnderline: true,
          readOnly: true,
        }}
      />
      <TextField
        variant='standard'
        className={styles.firstLoginInput}
        placeholder={t('firstName')}
        {...register('firstName')}

        size='small'
        InputProps={{
          disableUnderline: true,
        }}
      />
      <TextField
        variant='standard'
        className={styles.firstLoginInput}
        placeholder={t('lastName')}
        {...register('lastName')}
        size='small'
        InputProps={{
          disableUnderline: true,
        }}
      />
      <Button
        variant='contained'
        className={styles.firstLoginButton}
        disableRipple
        type="submit"
        disabled={disabledSubmit}>
        {t('doSubmit')}
      </Button>
     
    </Box>
  );
};

export default FirstLogin;
