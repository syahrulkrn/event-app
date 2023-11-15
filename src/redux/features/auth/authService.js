import axiosInstance from "../../../config/axios";

// Register user
const register = async (userData) => {
  const response = await axiosInstance.post("/register", userData);
  return response.data;
};

// login user
const login = async (userData) => {
  const response = await axiosInstance.post("/login", userData);
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
