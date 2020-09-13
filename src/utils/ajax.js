import axios from 'axios';

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
    // TODO: implement authentication
  }
  return new Promise((resolve, reject) =>
    axios(requestConfig)
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      })
  );
};

export const post = (url, data = {}, auth = false) => axiosRequest('post', url, { payload: data, auth });
