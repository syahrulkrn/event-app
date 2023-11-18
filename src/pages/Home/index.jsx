// File Home.jsx
import { Table, Alert, Tag, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useGetEvent from "./hooks/useGetEvent";

const EventTable = () => {
  const {
    event,
    isLoading,
    isError,
    message,
    handleTableChange,
    searchText,
    setSearchText,
    pagination,
    // setPagination,
  } = useGetEvent();

  const columns = [
    {
      title: "Event name",
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

  if (isError) {
    return <Alert message={`Error: ${message}`} type="error" />;
  }

  return (
    <div>
      <h1>Event List</h1>
      <Input
        placeholder="Search Event Name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16 }}
        prefix={<SearchOutlined />}
      />
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
