import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL
console.log(baseUrl); // Should print: https://api.internfy.in/api

const axiosInstance = axios.create({
  baseURL:baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
