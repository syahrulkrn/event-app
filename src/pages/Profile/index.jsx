import { useState } from "react";
import { Card, Avatar, Row, Col, Button, Modal, Form, Input } from "antd";
import useGetProfile from "./hooks/getProfile";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import useChangePassword from "./hooks/useChangePassword";

const Profile = () => {
  const { profile, isLoading } = useGetProfile();
  const { handleChangePassword } = useChangePassword();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleEditPassword = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const resetForm = () => {
    form.resetFields();
  };

  const handleSavePassword = () => {
    // Add logic to save the password
    // You can access the password values from the form using form.getFieldsValue()
    const { passwordOld, passwordNew, confirmPassword } = form.getFieldsValue();
    handleChangePassword(
      { passwordOld, passwordNew, confirmPassword },
      () => resetForm(),
      handleCancel
    );
    // Implement your logic to save the password here
    // ...

    // After saving the password, close the modal
    setIsModalVisible(false);
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <Card className="event-info-card">
      <Row gutter={16}>
        <Col span={6}>
          <div style={{ textAlign: "center" }}>
            <Avatar
              src={`${import.meta.env.VITE_API_IMG_URL}/${
                profile?.profile_img
              }`}
              style={{
                maxWidth: "100%",
                width: "400px",
                height: "400px",
              }}
              shape="square"
              alt={profile?.name}
            />
          </div>
        </Col>
        <Col span={18}>
          <h2>{profile?.name}</h2>
          <p>
            <strong>Email:</strong> {profile?.email}
          </p>
          <div style={{ marginTop: "20px" }}>
            <Button type="primary" onClick={handleEditPassword}>
              Change Password
            </Button>
          </div>
        </Col>
      </Row>

      <Modal
        title="Edit Password"
        visible={isModalVisible}
        onOk={handleSavePassword}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="passwordOld"
            label="Old Password"
            rules={[
              {
                required: true,
                message: "Please enter your old password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="passwordNew"
            label="New Password"
            rules={[
              {
                required: true,
                message: "Please enter your new password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["passwordNew"]}
            rules={[
              {
                required: true,
                message: "Please confirm your new password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("passwordNew") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default Profile;
