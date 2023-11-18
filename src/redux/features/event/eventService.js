import axiosInstance from "../../../config/axios";

// login user
const getEvent = async (data) => {
  const response = await axiosInstance.get("/event/list", data);
  return response.data;
};

const getEventDetail = async (eventId) => {
  const response = await axiosInstance.get("/event/list", eventId);
  return response.data;
};

const eventService = {
  getEvent,
  getEventDetail,
};

export default eventService;
