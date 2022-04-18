import SignIn from './Components/SignIn';
import Layout from './Components/Layout';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import FirstLogin from './Components/FirstLogin';
import ProfileUpdate from './Components/ProfileUpdate';
import Updated from './Components/Updated';

export default {
  Name: 'litedms',
  API: {
    AuthServer: 'https://auth.proxy.dms-dev4.kdcbslab.dev/auth/',
  },
  Components: {
    Layout,
    SignIn,
    ForgotPassword,
    ResetPassword,
    FirstLogin,
    ProfileUpdate,
    Updated,
  },
};
