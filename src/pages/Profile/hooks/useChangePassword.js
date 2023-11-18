import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../redux/features/profile/profileSlice";
import { useEffect } from "react";
import { notification } from "antd";

const useChangePassword = () => {
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.profile);

  const handleChangePassword = async (data, resetForm, handleCancel) => {
    try {
      await dispatch(changePassword(data));

      if (!isError) {
        notification.success({
          message: "Success",
          description: message,
          placement: "topRight",
        });
      } else {
        notification.error({
          message: "Error",
          description: message,
          placement: "topRight",
        });
      }
      resetForm();
      handleCancel();
    } catch (error) {
      // Handle errors here
      console.error("Error changing password:", error);
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

  return { handleChangePassword };
};

export default useChangePassword;
