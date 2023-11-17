import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvent, resetEvent } from "../../../redux/features/event/eventSlice";

const useEvent = () => {
  const dispatch = useDispatch();
  const { event, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.event
  );

  useEffect(() => {
    dispatch(
      getEvent({
        /* your params here */
      })
    );

    return () => {
      dispatch(resetEvent());
    };
  }, [dispatch]);

  return { event, isLoading, isError, isSuccess, message };
};

export default useEvent;
