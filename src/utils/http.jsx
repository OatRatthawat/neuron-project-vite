import axios from 'axios';
import { countBaseURL } from './util.jsx';
import { API_TIMEOUT } from '../config/index.jsx';
import store, { LOGOUT } from '../store/index.jsx';

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


const initializeInterceptor = (navigate) => {
    // Ensure the interceptor is only initialized once
    if (http.interceptors.request.handlers.length > 0) return;
    // console.log("initializeInterceptor called"); // Log when this function is invoked
    http.interceptors.request.use(
      (config) => {
        const token = store.getState().app.token; // Fetch token from redux 
        // console.log("Token in delayed interceptor:", token); // Log the token
  
        if (token) {
          // Add the Authorization header if the token exits
          config.headers.Authorization = `Bearer ${token}`;
        //   console.log("Authorization header added:", config.headers.Authorization);
        }
  
        return config; // Return the modified config object
      },
      (error) => Promise.reject(error)
    );

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        if(error.response?.status === 403){
          console.log("403 Forbidden detected. Loggin out.");
          store.dispatch(LOGOUT());
          navigate('/login');
        }
      }
    )
  };
  
export { http, initializeInterceptor };