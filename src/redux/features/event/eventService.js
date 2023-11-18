import axiosInstance from "../../../config/axios";

// login user
const getEvent = async (data) => {
  console.log("data", data);
  const response = await axiosInstance.get("/event/list", data);
  return response.data;
};

const eventService = {
  getEvent,
};

export default eventService;
