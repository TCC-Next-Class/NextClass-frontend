import axios from 'axios';
import type { AxiosInstance as BaseAxios } from 'axios';

const apiServer = import.meta.env.VITE_API_URL || 'http://localhost:8000';

interface AxiosInstance extends BaseAxios {
  server: string;
}

const api = axios.create({
  baseURL: apiServer + '/api',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
  withCredentials: true,
}) as AxiosInstance;

api.server = apiServer;

api.interceptors.request.use(async (config) => {
  if (config.method && config.method.toLowerCase() !== 'get') {
    await api.get('/sanctum/csrf-cookie', { baseURL: api.server });

    const csrfToken = getCookie('XSRF-TOKEN');
    if (csrfToken) {
      config.headers['X-XSRF-TOKEN'] = decodeURIComponent(csrfToken);
    }
  }

  return config;
});

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
}

export default api;