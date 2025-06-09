import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.aakash1z.online/api/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
