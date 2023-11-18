// File Home.jsx
import { Table, Tag, Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useGetEvent from "./hooks/useGetEvent";
import { Link } from "react-router-dom";
import moment from "moment";

const EventTable = () => {
  const {
    event,
    isLoading,
    handleTableChange,
    searchText,
    setSearchText,
    pagination,
  } = useGetEvent();

  const columns = [
    {
      title: "Actions",
      dataIndex: "id",
      key: "actions",
      render: (eventId) => (
        <Link to={`/event-detail/${eventId}`}>View Details</Link>
      ),
    },
    {
      title: "Event title",
      dataIndex: "title",
      key: "title",
      sorter: true,
    },
    {
      title: "Place",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Event Date",
      dataIndex: "event_date",
      key: "event_date",
      render: (eventDate) => (
        <span>{moment(eventDate).format("YYYY-MM-DD")}</span>
      ),
    },
    {
      title: "Participant",
      dataIndex: "participantCount",
      key: "participantCount",
    },
    {
      title: "Join Status",
      dataIndex: "isJoin",
      key: "isJoin",
      render: (isJoin) =>
        isJoin === "1" ? (
          <Tag color="green">Join</Tag>
        ) : (
          <Tag color="red">Not Join</Tag>
        ),
    },
  ];

  return (
    <div>
      <h1>Event List</h1>
      <Row>
        <Col span={8}>
          <Input
            placeholder="Search Event Title"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ marginBottom: 16 }}
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
      <Table
        dataSource={event?.event}
        loading={isLoading}
        columns={columns}
        pagination={{
          ...pagination,
          total: pagination.total,
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default EventTable;
