import { Tabs } from "antd";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = () => {
  const items = [
    {
      key: "1",
      label: "Login",
      children: <LoginForm />,
    },
    {
      key: "2",
      label: "Register",
      children: <RegisterForm />,
    },
  ];

  return (
    <Tabs
      style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}
      defaultActiveKey="1"
      items={items}
    />
  );
};

export default Auth;
