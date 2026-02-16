import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api/v1'
});

export const login = async (email, password) => {
  const { data } = await api.post('/auth/login', { email, password });
  return data;
};

export const runCode = async (token, payload) => {
  const { data } = await api.post('/submissions/run', payload, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return data;
};
