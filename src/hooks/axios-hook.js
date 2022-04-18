import React, { useState, useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { keykloackAuthoakState} from "../recoil/atoms";
import axios from "axios";


export const useAxiosPostRequest = () => {
  const [postData, setData] = useState();
  const [errorCode, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [keykloackAuth, setkeykloackAuth] = useRecoilState(keykloackAuthoakState);

  const postReq = (fetchEndpoint, postData) => {
    if (!fetchEndpoint) return;
    axios
      .post(`${fetchEndpoint}`, postData, {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      })
      .then((r) => r.data)
      .then(setkeykloackAuth)
      .then(setData)
      .then(() => setLoading(false))
      .catch((err)=> setError(err.response.status));

  }
  return {
    postReq,
    postData,
    errorCode,
    keykloackAuth,
  };
};


export const useAxiosGetRequest = () => {
  const [getData, setData] = useState();
  const getReq = (fetchEndpoint, token) => {
    if (!fetchEndpoint) return;
    axios
      .get(`${fetchEndpoint}`, {
        headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${token}`
        },
      })
   
      .then((res)=> setData(res.data))
      .catch((error) => console.log(error));

  }
  return {
    getReq,
    getData
  };
};

export const useAxiosPutRequest = () => {
  const [errorCode, setError] = useState();

  const putReq = (fetchEndpoint,  reqData, config) => {

    if (!fetchEndpoint) return;
    axios
      .put(fetchEndpoint, reqData, config)
      .then(response => response.text())
      .catch((err)=> setError(err));
  }
  return {
    putReq,
    errorCode
  };
};