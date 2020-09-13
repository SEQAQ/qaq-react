// API URL config
const api = process.env.REACT_APP_API_URL === null ? '' : process.env.REACT_APP_API_URL;

const config = { apiUrl: api };

export default config;
