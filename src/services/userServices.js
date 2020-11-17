import { message } from 'antd';

import { post } from '../lib';
import config from '../utils/config';
import { history } from '../utils/history';

export const login = (data) => {
  const url = `${config.apiUrl}/login`;
  const callback = (data) => {
    if (data.status >= 0) {
      localStorage.setItem('user', JSON.stringify(data.data));
      history.push('/');
      message.success(data.msg);
    } else {
      message.error(data.msg);
    }
  };
  post(url, data).then((res) => callback(res));
};

export const logout = () => {
  const url = `${config.apiUrl}/logout`;

  const callback = (data) => {
    if (data.status >= 0) {
      localStorage.removeItem('user');
      history.push('/login');
      message.success(data.msg);
    } else {
      message.error(data.msg);
    }
  };
  post(url, {}).then((res) => callback(res));
};

export const checkSession = (callback) => {
  const url = `${config.apiUrl}/checkSession`;
  post(url, {}).then((res) => callback(res));
};

// TODO: fix this up after user login is properly implemented
export const getUser = () => ({ uid: 1 });
