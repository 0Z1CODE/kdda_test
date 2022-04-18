import React from 'react';

import { useRecoilState } from 'recoil';
import { loginBrand } from '../../recoil/atoms';
import { ThemeManager } from '../../hooks/theme-hook';

const ProfileUpdateComponent: React.FC = () => {
  const [loginLayout, setLoginLeyout] = useRecoilState(loginBrand);
  const Theme = ThemeManager({ theme: loginLayout });

  return (
    <>
      <Theme.Components.Updated />
    </>
  );
};

export default ProfileUpdateComponent;
