import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../../i18n/i18n';
import { NavLink } from 'react-router-dom';
import { ErrorAlert } from '../../../hooks/alert-hook';
import kyoceraBlackLogo from '../assets/img/kyocera-logo-black.png';
//@ts-ignore
import styles from '../assets/scss/styles.module.scss';

const SignIn: React.FC = (props) => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const closeAlert = () => setShow(false);
  //@ts-ignore
  const { onSub, register, errorCode } = props;

  const codeDesc = {
    401: t('invalidUserMessage'),
    400: '400',
    404: '404',
  };

  useEffect(() => {
    //@ts-ignore
    setText(codeDesc[errorCode] || null);
    //@ts-ignore
    setShow(Boolean(codeDesc[errorCode] || null));
  }, [errorCode]);
  

  return (
    <>
      {ErrorAlert(text, show, closeAlert)}
      <Box component='form' className={styles.form}>
        <TextField
          autoFocus
          variant='standard'
          placeholder={t('username')}
          className={styles.loginInput}
          size='small'
          {...register('username')}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <TextField
          variant='standard'
          placeholder={t('password')}
          className={styles.loginInput}
          size='small'
          {...register('password')}
          type='password'
          InputProps={{
            disableUnderline: true,
          }}
        />
        <Button
          className={styles.loginButton}
          disableRipple
          variant='contained'
          onClick={onSub}>
          {t('doLogIn')}
        </Button>
        <NavLink to= {`/reset-credentials${window.location.search}`} className={styles.linkForgotPassword}>
        {t('doForgotPassword')}
      </NavLink>
        <img
          src={kyoceraBlackLogo}
          alt='kyocera-logo-black'
          className={styles.kyoceraBlackLogo}
        />
      </Box>
    </>
  );
};

export default SignIn;
