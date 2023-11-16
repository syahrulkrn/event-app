import { useState } from "react";
import { Tabs } from "antd";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = () => {
  const [activeKey, setActiveKey] = useState("1");

  const onChange = (key) => {
    setActiveKey(key);
  };

  const handleRegisterSuccess = () => {
    setActiveKey("1");
  };

  const items = [
    {
      key: "1",
      label: "Login",
      children: <LoginForm />,
    },
    {
      key: "2",
      label: "Register",
      children: <RegisterForm onSuccess={handleRegisterSuccess} />,
    },
  ];

  return (
    <Tabs
      style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}
      activeKey={activeKey}
      items={items}
      onChange={onChange}
    />
  );
};

export default Auth;
