import { Form, Input, Button } from "antd";
import useRegister from "./hooks/useRegister";
import { useSelector } from "react-redux";

const RegisterForm = () => {
  const { handleRegister } = useRegister();
  const [form] = Form.useForm();
  const { isLoading } = useSelector((state) => state.auth);

  const resetForm = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    handleRegister(values, () => resetForm());
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 24 }}
      layout="vertical"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
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

      <Button type="primary" htmlType="submit" loading={isLoading}>
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
