import axios from './axios';

export const authApi = {
  register: (userData) => axios.post('/auth/register', userData),
  login: (credentials) => axios.post('/auth/login', credentials),
  getMe: () => axios.get('/auth/me'),
  forgotPassword: (email) => axios.post('/auth/forgot-password', { email }),
  resetPassword: (data) => axios.post('/auth/reset-password', data),
};