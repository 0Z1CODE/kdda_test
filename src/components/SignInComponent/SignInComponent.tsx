//@ts-nocheck
import React, { useEffect,  useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Person, Https, DescriptionSharp, FamilyRestroomRounded, LocalLibrarySharp } from '@mui/icons-material';
import '../../i18n/i18n';
import { NavLink } from 'react-router-dom';
import qs from 'qs';
import { fetchUserToken, fetchUser } from '../../apis/provider-portal';
import { useAxiosPostRequest, useAxiosGetRequest } from '../../hooks/axios-hook';
import { ErrorAlert } from '../../hooks/alert-hook';
import { useRecoilState } from 'recoil';
import {loginBrand} from "../../recoil/atoms"
import { ThemeManager } from '../../hooks/theme-hook';

type FormData = {
  username: string;
  password: string;
};

const SignInComponent: React.FC = () => {
  const { t, i18n } = useTranslation();
  // const [text, setText] = useState<String>()
  // const [show, setShow] = useState(false)
  const { register, getValues } = useForm<FormData>();
  const { postReq, keykloackAuth, errorCode } = useAxiosPostRequest();
  const { getReq } = useAxiosGetRequest();
  const [hasAccess, setAccess] = useState(false)
  const queryParams = new URLSearchParams(window.location.search)

  const [loginLayout, setLoginLeyout] = useRecoilState(loginBrand);
  const Theme = ThemeManager({theme: loginLayout});

  const codeDesc = {
    401: t('invalidUserMessage'),
    400: "400",
    404: "404",
  };




  const onSub = async () => {
    let userData = qs.stringify({
      grant_type: 'password',
      username: getValues('username'),
      password: getValues('password'),
      client_id: queryParams.get("client_id")
    });
    postReq(fetchUserToken(), userData);
  }



  

  useEffect(() => {
   
    if (keykloackAuth !== null && keykloackAuth?.access_token) {
      console.log(
        // @ts-ignore 
      keykloackAuth.refresh_token
      );
      setAccess(true)
    } else {
      console.log(errorCode)
    }
  }, [keykloackAuth, errorCode])

  useEffect(() => {
    //@ts-ignore
    hasAccess ? window.location.href = `${queryParams.get("redirect_uri")}?token=${keykloackAuth.access_token}&redirect_uri=${queryParams.get("redirect_uri")}&refresh_token=${keykloackAuth.refresh_token}&refresh_time=${keykloackAuth.expires_in}`
      : console.log("No Access");
  }, [hasAccess])

  return (
    <>
      <Theme.Components.SignIn onSub = {onSub} register={register} errorCode={errorCode}/>
    </>
  );
};

export default SignInComponent;
