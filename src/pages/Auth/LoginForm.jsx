import { Form, Input, Button } from "antd";
import useLogin from "./hooks/useLogin";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const { handleLogin } = useLogin();
  const { isLoading } = useSelector((state) => state.auth);

  return (
    <Form
      name="login"
      onFinish={handleLogin}
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 24 }}
      layout="vertical"
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
