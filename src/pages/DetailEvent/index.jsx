import { Row, Col, Card } from "antd";
import useGetEvent from "./hooks/useGetDetail";
import { useParams } from "react-router-dom";

// ... (imports)

const EventDetail = () => {
  const { id } = useParams();
  const { eventDetail, isError, isLoading, message } = useGetEvent(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {message}</p>;
  }

  return (
    <div>
      <h1>{eventDetail?.event?.title}</h1>

      <Row gutter={16}>
        <Col span={12}>
          <Card
            title="Event Details"
            style={{ marginBottom: 16 }}
            cover={<img alt="event" src={eventDetail?.event?.event_img} />}
          >
            {/* ... (other details) */}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Event Information">
            <p>
              <strong>Place:</strong> {eventDetail?.event?.place}
            </p>
            <p>
              <strong>Participant Count:</strong>{" "}
              {eventDetail?.event?.participantCount}
            </p>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="Organizer Information">
            {/* ... (organizer information) */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EventDetail;
