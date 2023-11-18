import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventDetail } from "../../../redux/features/event/eventSlice";

const useGetEvent = (eventId) => {
  const dispatch = useDispatch();
  const { eventDetail, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.event
  );

  useEffect(() => {
    dispatch(getEventDetail({ eventId }));

    return () => {
      dispatch(getEventDetail());
    };
  }, [dispatch, eventId]);

  return { eventDetail, isError, isSuccess, isLoading, message };
};

export default useGetEvent;
