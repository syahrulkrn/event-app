import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryDetail } from "../../../redux/features/event/eventSlice";

const useGetHistory = (eventId) => {
  const dispatch = useDispatch();
  const { eventDetail, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.event
  );

  useEffect(() => {
    dispatch(getHistoryDetail({ eventId }));
    return () => {
      dispatch(getHistoryDetail());
    };
  }, [dispatch, eventId]);

  return { eventDetail, isError, isSuccess, isLoading, message };
};

export default useGetHistory;
