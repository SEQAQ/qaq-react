import axios from 'axios';
import cookie from 'react-cookies';

import config from '../utils/config';
import { get } from './request';

axios.defaults.baseURL = config.apiUrl;

export const userInfo = () => {
  const account = cookie.load('account');
  if (account === null) {
    return null;
  }
  get(config.apiUrl + '/users/findbyaccount', account, true);
};
