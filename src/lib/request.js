import axios from 'axios';

import config from '../utils/config';

axios.defaults.baseURL = config.apiUrl;
axios.defaults.withCredentials = true;

const axiosRequest = (method, url = '', options = {}) => {
  const auth = options.auth;
  const payload = options.payload;
  const params = options.params;
  const requestConfig = {
    method,
    url,
    params,
    data: payload,
  };
  if (auth) {
    requestConfig.headers = {
      Authorization: localStorage.getItem('auth'),
    };
  }
  return new Promise((resolve, reject) =>
    axios(requestConfig)
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          // eslint-disable-next-line
          console.log(res);
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      })
  );
};

export const get = (url, params = {}, auth = false) => axiosRequest('get', url, { params, auth });

export const post = (url, data = {}, auth = false) => axiosRequest('post', url, { payload: data, auth });

/**
 * Send an HTTP PUT request, returns a Promise
 * @param {string} url (relative) request url
 * @param {Object} data payload data
 * @param {boolean} auth whether to attach authorization header
 */
export const put = (url, data = {}, auth = false) => axiosRequest('put', url, { payload: data, auth });
