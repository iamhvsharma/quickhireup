import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add basic error logging
instance.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

instance.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
}, error => {
  console.error('API Error:', error.message);
  return Promise.reject(error);
});

export default instance;