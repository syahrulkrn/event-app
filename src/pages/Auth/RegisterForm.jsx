import { Form, Input, Button } from "antd";
import useRegister from "./hooks/useRegister";

const RegisterForm = () => {
  const { handleRegister } = useRegister();
  const [form] = Form.useForm(); // Gunakan Form.useForm() untuk mendapatkan instance form

  const resetForm = () => {
    form.resetFields(); // Reset semua nilai pada form
  };

  const onFinish = (values) => {
    handleRegister(values, () => resetForm());
  };

  return (
    <Form form={form} name="register" onFinish={onFinish}>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

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

      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("The two passwords do not match!");
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
