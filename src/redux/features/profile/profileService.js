import axiosInstance from "../../../config/axios";

const getProfile = async () => {
  const response = await axiosInstance.get("/profile");
  return response.data;
};

const changePassword = async (data) => {
  const response = await axiosInstance.put("/profile/change-password", data);
  return response.data;
};

const profileService = {
  getProfile,
  changePassword,
};

export default profileService;
