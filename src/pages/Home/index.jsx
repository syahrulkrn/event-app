import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvent, resetEvent } from "../../redux/features/event/eventSlice";

const EventComponent = () => {
  const dispatch = useDispatch();
  const { event, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.event
  );

  useEffect(() => {
    // Dispatch async thunk to get event data
    dispatch(
      getEvent({
        /* your params here */
      })
    );

    // Clean up event state when component unmounts
    return () => {
      dispatch(resetEvent());
    };
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <h1>Event Details</h1>
        <pre>{JSON.stringify(event, null, 2)}</pre>
      </div>
    );
  }

  return null;
};

export default EventComponent;
