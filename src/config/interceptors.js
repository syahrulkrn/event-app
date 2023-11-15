// import { useHistory } from "react-router-dom";
const setupInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const authToken = JSON.parse(localStorage.getItem("auth"))?.user
        ?.authorization?.token;

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // Check for specific success conditions or handle global success behaviors
      return response;
    },
    (error) => {
      console.log("error", error);

      // Handle error responses globally
      if (error.response.status === 401) {
        // history.push("/auth");
        console.error("Unauthorized. Redirect to login page.");
      }

      return Promise.reject(error);
    }
  );
};

export default {
  setupInterceptors,
};
