import {ThemeManager} from "../hooks/theme-hook";
const queryParams = new URLSearchParams(window.location.search);
const Theme = ThemeManager({theme: sessionStorage.getItem('theme')});
const endpoint = Theme?.API?.AuthServer;

let realm = window.location.pathname.split("/")[2];
export const fetchUserToken = () => {
  let url = `${endpoint}realms/${realm}/protocol/openid-connect/token`;
  return url;
};
export const connectToApi = () => {
  let url = Theme?.API?.PortalService
  return url 
}
export const fetchUser = () => {
  let url = `${endpoint}realms/${realm}/protocol/openid-connect/userinfo`;
  return url;
};
export const putNewPassword = (userId) => {
  let url = `PUT${endpoint}admin/realms/${realm}/users/${userId}/reset-password`
  return url;
};

export const fetchUserCred = (userId) => {
  let url = `${endpoint}admin/realms/${realm}/users/${userId}`
  return url;
};

