import React, { useState, useEffect } from "react";
import { useRecoilState , useRecoilValue} from "recoil";
import { eulaState, userId,userToken, appRealm, loginBrand} from "../../recoil/atoms";
import { ThemeManager } from "../../hooks/theme-hook";
import { useAxiosPutRequest } from "../../hooks/axios-hook";
import { putNewPassword } from "../../apis/provider-portal";
import { useNavigate } from 'react-router-dom';
import Eula from "../Eula/Eula";

const ResetPasswordComponent: React.FC = () => {
  const [showEula, setEulaState] = useRecoilState(eulaState);
  const Theme = ThemeManager({ theme: useRecoilValue(loginBrand)});
  const [newPassword, setNewPassword] = useState();
  const { putReq, errorCode } = useAxiosPutRequest();
  const uId = useRecoilValue(userId);
  const token =  useRecoilValue(userToken)
  const realm = useRecoilValue(appRealm)
  const navigate = useNavigate()


  useEffect(() => {
    if (!errorCode) {
    } else  {
      //@ts-ignore
      setEulaState(true)
    };
  }, [errorCode])

  const onSub = async () => {  
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    };

    const reqData = JSON.stringify({ "type": "password", "value": newPassword, "temporary": false })

    //@ts-ignore
    putReq(putNewPassword(uId), reqData, config);
 
    
  };


  const aceptEula = () => {
    setEulaState(false);
    navigate(`/auth/${realm}/login-actions/update-profile`)
  }

  return (
    <>
      <Theme.Components.ResetPassword
        onSub={onSub}
        setNewPassword={setNewPassword}
      />
      {
        //@ts-ignore 
        <Eula aceptEula={aceptEula} />
      }

    </>
  );
};

export default ResetPasswordComponent;
