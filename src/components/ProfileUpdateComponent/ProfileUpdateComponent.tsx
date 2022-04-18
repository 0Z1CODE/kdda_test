import React, { useEffect } from 'react';

import { useRecoilState, useRecoilValue} from 'recoil';
import { loginBrand, userId, userToken, appRealm,  } from '../../recoil/atoms';

import { ThemeManager } from '../../hooks/theme-hook';

const ProfileUpdateComponent: React.FC = () => {
  const [uId, setUid] = useRecoilState(userId);
  const [uToken, setUtoken] = useRecoilState(userToken);
  const [realm, setRealm] = useRecoilState(appRealm);
  const Theme = ThemeManager({ theme:  useRecoilValue(loginBrand)});
  const queryParams = new URLSearchParams(window.location.search);

 
  useEffect(() => {
  
    //@ts-ignore
    setUtoken(queryParams.get("token"))
    //@ts-ignore
    setRealm(window.location.pathname.split("/")[2])
    //@ts-ignore
    setUid(queryParams.get("userId"))
    
    
  }, [uId])




  return (
    <>
      <Theme.Components.ProfileUpdate />
    </>
  );
};

export default ProfileUpdateComponent;
