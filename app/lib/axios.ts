import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.zipai.vn/&action_XMLReq=photoRestoration', // ví dụ
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;