import { Form, Input, Button } from "antd";
import useLogin from "./hooks/useLogin";

const LoginForm = () => {
  const { handleLogin } = useLogin();

  return (
    <Form name="login" onFinish={handleLogin}>
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
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
