import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
const queryParams = new URLSearchParams(window.location.search)

 const CheckIn: React.FC = () => {
  const authLSItem = localStorage.getItem("appAuth")
  const navigation = useNavigate()
  console.log(queryParams.get("app"));
  
  // const checkIn = () => {
  //   const {redirectUrl, realm, clientId} = config
  //   if(authLSItem) {
  //     window.location.href = redirectUrl
  //   } else {
  //     navigation(`/auth/${realm}?client_id=${clientId}&redirect_uri=${redirectUrl}`)
  //   }
  // }
  //   useEffect(()=> {
  //     checkIn()
  //   }, [])
   return null
} 

export default CheckIn
