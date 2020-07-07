import axios from 'axios';
import { API_BASE_URL } from '@/config';

const instance = axios.create({
  baseURL: API_BASE_URL
});
instance.interceptors.response.use(
  response => response.data
);
export default instance;
