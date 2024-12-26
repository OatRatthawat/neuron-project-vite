import axios from 'axios';
import { countBaseURL } from './util.jsx';
import { API_TIMEOUT } from '../config/index.jsx';
import { LOCAL_STORAGE_TOKEN_KEY } from './user.jsx';

const baseURL = countBaseURL();
const http = axios.create({
    baseURL,
    timeout: API_TIMEOUT,
    headers: {
        'content-Type' : 'application/json',
        'Cache-Control': 'no-cache',
        Accept: 'application/json',
    },
});


// export const axiosCancelTokens = [];

// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     // Add Axios CancleToken to the config
//     const source = axios.CancelToken.source();
//     config.cancelToken = source.token;
//     axiosCancelTokens.push(source.cancel);
    
//     return config;
// });

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (axios.isCancel(error)) {
//       console.log('Request canceled:', error.message);
//     } else {
//       console.error('API Error:', error.response?.data || error.message);
//     }
//     return Promise.reject(error);
//   }
// );

// // Function to cancel all requests
// export const cancelAllRequests = () => {
//   axiosCancelTokens.forEach((cancel) => cancel && cancel());
//   axiosCancelTokens.length = 0;
// };


export default http;