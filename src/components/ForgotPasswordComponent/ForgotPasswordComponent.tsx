import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../i18n/i18n';
import { useRecoilState } from 'recoil';
import { loginBrand } from './../../recoil/atoms';
import { ThemeManager } from '../../hooks/theme-hook';
import {useAxiosGetRequest} from './../../hooks/axios-hook'
import {connectToApi} from "./../../apis/provider-portal"
type FormData = {
  username: string;
};
const ForgotPasswordComponent: React.FC = () => {
  const { getReq } = useAxiosGetRequest();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();



  const onSub = async () => {
   await getReq(connectToApi());
  }

  const [loginLayout, setLoginLeyout] = useRecoilState(loginBrand);
  const Theme = ThemeManager({ theme: loginLayout });

  return (
    <>
      <Theme.Components.ForgotPassword onSub={onSub} register={register} />
    </>
  );
};

export default ForgotPasswordComponent;
