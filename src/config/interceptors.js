import { getUserToken } from "../utils/authToken";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const setupInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    async (config) => {
      config.headers.Authorization = `Bearer ${(await getUserToken()) || ""}`;
      return config;
    },
    (error) => {
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("Response error:", error);
      if (error?.response?.status === 401) {
        history.push("/auth");
        console.error("Unauthorized. Redirect to login page.");
      }
      return Promise.reject(error);
    }
  );
};

export default {
  setupInterceptors,
};
