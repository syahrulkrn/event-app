import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Spin, Alert } from "antd";
import { getEvent, resetEvent } from "../../redux/features/event/eventSlice";

const Home = () => {
  const dispatch = useDispatch();
  const eventState = useSelector((state) => state.event);

  useEffect(() => {
    // Dispatch action untuk mengambil data dari server
    dispatch(
      getEvent({
        /* your parameters if needed */
      })
    );

    // Bersihkan state setelah komponen dilepas
  }, [dispatch]);

  const columns = [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
    },
    // Tambahkan kolom lain jika perlu
  ];

  if (eventState.isLoading) {
    return <Spin size="large" />;
  }

  if (eventState.isError) {
    return <Alert message={`Error: ${eventState.message}`} type="error" />;
  }

  return (
    <Table
      dataSource={eventState.isSuccess ? [eventState.event] : []}
      columns={columns}
      rowKey="id" // Pastikan menggunakan kunci unik dari data Anda
    />
  );
};

export default Home;
