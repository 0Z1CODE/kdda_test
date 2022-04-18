import React from 'react';
import { useRoutes} from "react-router-dom";
import useAppRoutes from "../hooks/router-hook";
import { useRecoilState } from 'recoil';
import {loginBrand} from './../recoil/atoms'



 function Router() {

  const { getRoutes } = useAppRoutes();
  const Routes = useRoutes(getRoutes());
  const queryParams = new URLSearchParams(window.location.search)
  const [loginLayout, setLoginLeyout] = useRecoilState(loginBrand);

  if(queryParams.has("theme")) {
    const theme = queryParams.get("theme")
    sessionStorage.setItem("theme", theme)
    setLoginLeyout(theme);
  }

  return Routes;
}

export default Router
