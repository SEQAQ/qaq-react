import axios from 'axios';
import cookie from 'react-cookies';

import config from '../utils/config';

axios.defaults.baseURL = config.apiUrl;

/**
 * Get current user info. Returns null if user is not logged in.
 */
export const userInfo = () => {
  const account = cookie.load('account');
  let userInfo = null;
  if (account === null) {
    return null;
  }
  if (!window.localStorage) {
    alert('浏览器不支持localstorage');
    userInfo = cookie.load('userInfo');
  } else {
    userInfo = localStorage.getItem('userInfo');
  }
  return JSON.parse(userInfo);
};
