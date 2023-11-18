import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/features/auth/authSlice";
import { notification } from "antd";
import { useEffect } from "react";

const useRegister = () => {
  const dispatch = useDispatch();
  const { message, isError } = useSelector((state) => state.auth);

  const handleRegister = async (values, resetForm) => {
    try {
      const userData = {
        name: values.username,
        email: values.email,
        password: values.password,
      };
      await dispatch(register(userData));
      if (!isError) {
        resetForm();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (!isError && message) {
      notification.success({
        message: "Success",
        description: message,
        placement: "topRight",
      });
    }
  }, [isError, message]);

  return { handleRegister };
};

export default useRegister;
