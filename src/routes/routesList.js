import SignInPage from '../pages/SignInPage';
import ProfileUpdatePage from '../pages/ProfileUpdatePage';
import UpdatedPage from '../pages/UpdatedPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import FirstLoginPage from '../pages/FirstLoginPage';
import CheckIn from '../pages/CheckIn';
import { ThemeManager } from './../hooks/theme-hook';
import { loginBrand } from '../recoil/atoms';
import { useRecoilState } from 'recoil';

const MENUS = {
  0: 'MAIN_MENU',
  1: 'CASE_MENU',
};

const queryParams = new URLSearchParams(window.location.search);

let layout ;
if (!layout && queryParams.has("theme")) {
  layout = queryParams.get('theme')
}
if(!layout && sessionStorage.theme !== null)layout=sessionStorage.getItem('theme')


const Theme = ThemeManager({ theme: layout });

const routeList = [
  {
    path: '/',
    name: 'CheckIn',
    component: <CheckIn />,
    icon: '',
    menu: MENUS[0],
    menuItem: 0,
    layoutComponent: Theme.Components.Layout,
  },

  {
    path: '/auth*',
    name: 'SignIn',
    component: <SignInPage />,
    icon: '',
    menu: MENUS[0],
    menuItem: 0,
    layoutComponent: Theme.Components.Layout,
  },

  {
    path: '/reset-credentials*',
    name: 'Forgot Password',
    component: <ForgotPasswordPage />,
    icon: '',
    menu: MENUS[0],
    menuItem: 0,
    layoutComponent: Theme.Components.Layout,
  },

  {
    path: '/auth/:realm/login-actions/update-password*',
    name: 'Reset Password',
    // exac: true,
    component: <ResetPasswordPage />,
    icon: '',
    menu: MENUS[0],
    menuItem: 0,
    layoutComponent: Theme.Components.Layout,
  },

  {
    path: '/auth/:realm/login-actions/update-profile*',
    name: 'First Login',
    component: <FirstLoginPage />,
    icon: '',
    menu: MENUS[0],
    menuItem: 0,
    layoutComponent: Theme.Components.Layout,
  },

  {
    path: '/auth/:realm/activate*',
    name: 'Update Profile/Password',
    component: <ProfileUpdatePage />,
    icon: '',
    menu: MENUS[0],
    menuItem: 0,
    layoutComponent: Theme.Components.Layout,
  },

  {
    path: '/updated*',
    name: 'Updated Profile/Password',
    component: <UpdatedPage />,
    icon: '',
    menu: MENUS[0],
    menuItem: 0,
    layoutComponent: Theme.Components.Layout,
  },



];

const authRoutes = [];

export { routeList, authRoutes, MENUS };
