import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://a219-182-68-165-241.ngrok.io',
  timeout: 5000,
  timeoutErrorMessage: 'Timeout',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const updatedConfig = config;
    // Do something before request is sent
    const token = localStorage.getItem('token');
    if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`;
    }

    return updatedConfig;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data) {
      return Promise.reject(new Error(error.response.data));
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosInstance;
