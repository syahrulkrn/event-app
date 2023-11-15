import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/features/auth/authSlice";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user?.authorization?.token) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = (values) => {
    try {
      const userData = {
        email: values.email,
        password: values.password,
      };

      dispatch(login(userData));
    } catch (error) {
      console.log("error", error);
    }
  };

  return { handleLogin };
};

export default useLogin;
