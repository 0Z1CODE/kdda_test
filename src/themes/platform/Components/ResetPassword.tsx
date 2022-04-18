import React, { useState, useEffect, memo, useCallback } from 'react';
import PasswordChecklist from 'react-password-checklist';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Https } from '@mui/icons-material';
import { usePasswordValidation } from '../../../hooks/password-hook';
import TooltipPassValidation from '../../../components/Tooltips/TooltipPassValidation';
import TooltipPassMatch from '../../../components/Tooltips/TooltipPassMatch';

// @ts-ignore
import styles from '../assets/scss/styles.module.scss';

type FormData = {
  password: string;
  passwordConfirm: string;
};

const ResetPassword: React.FC = (props) => {
  const { t, i18n } = useTranslation();
  const { register, handleSubmit, watch, getValues } = useForm<FormData>();
  const getPassValue = watch('password');
  const getPassConfirmValue = watch('passwordConfirm');
  const [password, setPassword] = useState(getPassValue);
  const [passwordConfirm, setPasswordConfirm] = useState(getPassConfirmValue);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  //@ts-ignore
const {onSub, setNewPassword} = props
  const [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    specialChar,
    match,
    hasSpace,
  ] = usePasswordValidation({
    firstPassword: password,
    secondPassword: passwordConfirm,
  });

  useEffect(() => {
    if (
      validLength &&
      hasNumber &&
      upperCase &&
      lowerCase &&
      specialChar &&
      match &&
      !hasSpace
    ) {
      setDisabledSubmit(false);
    } else {
      setDisabledSubmit(true);
    }
  }, [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    specialChar,
    match,
    hasSpace,
  ]);

  const memoizedPass = useCallback(() => {
    setPassword(getValues('password'));
  }, []);
  const memoizedConfPass = useCallback(() => {
    setPasswordConfirm(getValues('passwordConfirm'));
    setNewPassword(getValues('passwordConfirm') )
  }, []);

  useEffect(() => {
    memoizedPass();
    memoizedConfPass();
  });


  return (
    <Box component='form' className={styles.form}>
      {/* {ErrorAlert("Some Text For text")} */}
      <TooltipPassValidation password={password} translator={t}>
        <TextField
          autoFocus
          variant='standard'
          placeholder={t('password')}
          className={styles.resetInput}
          size='small'
          type='password'
          {...register('password')}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </TooltipPassValidation>
      <TooltipPassMatch
        password={password}
        passwordConfirm={passwordConfirm}
        translator={t}>
        <TextField
          variant='standard'
          placeholder={t('passwordConfirm')}
          className={styles.resetInput}
          type='password'
          size='small'
          {...register('passwordConfirm')}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </TooltipPassMatch>
      <Button
        variant='contained'
        className={styles.resetButton}
        disableRipple
        onClick={onSub}
        disabled={disabledSubmit}>
        {t('doSubmit')}
      </Button>
    </Box>
  );
};

export default ResetPassword;
