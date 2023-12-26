import axios from 'axios';
import { backend_url } from './index';

const instance = axios.create({ baseURL: backend_url });

instance.defaults.headers.post['Content-Type'] = 'application/json';
const token = localStorage.getItem('token'); if (token) { instance.defaults.headers.common['Authorization'] = `Bearer ${token}`; }

instance.setToken = (accessToken) => {
    instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
};

export default instance;
