import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000', // Your backend server URL
    timeout: 5000,
    headers: {
        'Accept': 'application/json'
    }
});

export default api;