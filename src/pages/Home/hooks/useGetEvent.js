import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../../redux/features/event/eventSlice";

const useGetEvent = () => {
  const dispatch = useDispatch();

  // const { event } = useSelector((state) => state.event);

  useEffect(() => {
    handleGetEvent();
  }, []);

  const handleGetEvent = () => {
    try {
      const params = {
        page: 1,
        limit: 10,
        sortBy: 0,
      };

      dispatch(getEvent(params));
    } catch (error) {
      console.log("error", error);
    }
  };

  return { handleGetEvent };
};

export default useGetEvent;
