import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../redux/features/profile/profileSlice";

const useGetProfile = () => {
  const dispatch = useDispatch();
  const { profile, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    dispatch(getProfile());

    return () => {
      dispatch(getProfile());
    };
  }, [dispatch]);

  return { profile, isError, isSuccess, isLoading, message };
};

export default useGetProfile;
