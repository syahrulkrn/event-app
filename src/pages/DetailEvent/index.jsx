import { Row, Col, Card } from "antd";
import moment from "moment";

const DetailEvent = ({ event }) => {
  const {
    title,
    event_img,
    place,
    event_date,
    start_scan,
    tolerance_time,
    qrcode,
    description,
    quota,
    user_id,
    status,
    created_at,
    isJoin,
    participantCount,
    get_user,
  } = event;

  return (
    <div>
      <h1>{title}</h1>

      <Row gutter={16}>
        <Col span={12}>
          <Card
            title="Event Details"
            style={{ marginBottom: 16 }}
            cover={<img alt="event" src={event_img} />}
          >
            <p>
              <strong>Place:</strong> {place}
            </p>
            <p>
              <strong>Event Date:</strong>{" "}
              {moment(event_date).format("YYYY-MM-DD HH:mm:ss")}
            </p>
            <p>
              <strong>Start Scan:</strong> {start_scan}
            </p>
            <p>
              <strong>Tolerance Time:</strong> {tolerance_time}
            </p>
            <p>
              <strong>QR Code:</strong> {qrcode}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Event Information">
            <p>
              <strong>Quota:</strong> {quota}
            </p>
            <p>
              <strong>User ID:</strong> {user_id}
            </p>
            <p>
              <strong>Status:</strong> {status === "1" ? "Active" : "Inactive"}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {moment(created_at).format("YYYY-MM-DD HH:mm:ss")}
            </p>
            <p>
              <strong>Join Status:</strong>{" "}
              {isJoin === "1" ? "Join" : "Not Join"}
            </p>
            <p>
              <strong>Participant Count:</strong> {participantCount}
            </p>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="Organizer Information">
            <p>
              <strong>ID:</strong> {get_user.id}
            </p>
            <p>
              <strong>Name:</strong> {get_user.name}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DetailEvent;
