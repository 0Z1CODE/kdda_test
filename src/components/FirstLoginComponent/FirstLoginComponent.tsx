import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userId, userToken, loginBrand} from '../../recoil/atoms';
import { ThemeManager } from '../../hooks/theme-hook';
import { useAxiosGetRequest, useAxiosPutRequest } from '../../hooks/axios-hook';
import { fetchUserCred } from '../../apis/provider-portal';

type FormData = {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
};

const FirstLoginComponent: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { register, handleSubmit } = useForm<FormData>();
  const { getReq, getData } = useAxiosGetRequest()
  const {putReq} = useAxiosPutRequest()
  const uId = useRecoilValue(userId);
  const token =  useRecoilValue(userToken)
  const [newUserCred, setNewUserCred] = useState({})
  const Theme = ThemeManager({ theme: useRecoilValue(loginBrand)});
  useEffect(()  => {
    //@ts-ignore
    getReq(fetchUserCred(uId), token)
  }, []);

  useEffect(() => {
    //@ts-ignore
    setNewUserCred({...getData});
  
    
  }, [getData]);



  const onSub = async (data: any) => {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    } 
      const reqData = JSON.stringify({...data}) 
      putReq(fetchUserCred(uId), reqData, config);
      
  };

  return (
    <>
      <Theme.Components.FirstLogin onSub={onSub} userData = {newUserCred} setNewUserCred={setNewUserCred}/>
    </>
  );
};

export default FirstLoginComponent;
