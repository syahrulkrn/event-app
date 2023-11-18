import axiosInstance from "../../../config/axios";

const getEvent = async (data) => {
  const response = await axiosInstance.get("/event/list", data);
  return response.data;
};

const getEventDetail = async ({ eventId }) => {
  const response = await axiosInstance.get(`/event/${eventId}`);
  return response.data;
};

const getHistories = async (data) => {
  const response = await axiosInstance.get(`/histories`, data);
  return response.data;
};

const getHistoryDetail = async ({ eventId }) => {
  const response = await axiosInstance.get(`/histories/${eventId}`);
  return response.data;
};

const eventService = {
  getEvent,
  getEventDetail,
  getHistories,
  getHistoryDetail,
};

export default eventService;
