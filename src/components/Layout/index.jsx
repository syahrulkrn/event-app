/* eslint-disable react/prop-types */
import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { resetLoggedUser } from "../../redux/features/auth/authSlice";
import { Header } from "antd/es/layout/layout";
import {
  HistoryOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";

const { Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "rgb(0,21,41)",
};
const contentStyle = {
  minHeight: 120,
  margin: "24px 16px",
};
const siderStyle = {
  lineHeight: "120px",
  color: "#fff",
};

const Wrapper = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetLoggedUser());
    navigate("/auth");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={headerStyle}>Event App</Header>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
            <Menu.Item key="/">
              <Link to="/">
                <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                  <HomeOutlined />
                  <span>Home</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="/profile">
              <Link to="/profile">
                <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                  <UserOutlined />
                  <span>Profile</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="/history">
              <Link to="/history">
                <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                  <HistoryOutlined />
                  <span>History</span>
                </div>
              </Link>
            </Menu.Item>
          </Menu>
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button
              type="primary"
              icon={<LogoutOutlined />}
              style={{ width: "100%" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Wrapper;
