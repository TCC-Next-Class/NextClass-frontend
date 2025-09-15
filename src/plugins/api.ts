import axios from 'axios';
import { useSession } from "@/stores/session";

const api = axios.create({
  baseURL: import.meta.env.API_URL || 'https://nextclass-backend-ue8q.onrender.com/',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000
});

api.interceptors.request.use((config) => {
  const session = useSession();

  if (session) {
    config.headers.Authorization = `Bearer ${session.state.token}`;
  }
  return config;
});

export default api;
