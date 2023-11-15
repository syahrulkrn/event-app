import axios from "axios";
import interceptors from "./interceptors";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

interceptors.setupInterceptors(axiosInstance);

export default axiosInstance;
