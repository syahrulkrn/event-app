import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/features/auth/authSlice";
import { notification } from "antd";
import { useEffect } from "react";

const useRegister = () => {
  const dispatch = useDispatch();
  const { message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isError && message) {
      notification.success({
        message: "Success",
        description: message,
        placement: "topRight",
      });
    }
  }, [isError, message]);

  const handleRegister = async (values, onSuccess) => {
    try {
      const userData = {
        name: values.username,
        email: values.email,
        password: values.password,
      };

      await dispatch(register(userData));
      onSuccess();
    } catch (error) {
      console.log("error", error);
    }
  };

  return { handleRegister };
};

export default useRegister;
