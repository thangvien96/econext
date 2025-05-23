import axios from 'axios';

const api = axios.create({
  baseURL: 'http://alluneed.in/api', // ví dụ
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;