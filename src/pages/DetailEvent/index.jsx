import { Row, Col, Card } from "antd";
import useGetEvent from "./hooks/useGetDetail";
import { useParams } from "react-router-dom";
import moment from "moment";
import QRCode from "react-qr-code";

const EventDetail = () => {
  const { id } = useParams();
  const { eventDetail, isError, isLoading, message } = useGetEvent(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {message}</p>;
  }

  const qrCodeValue = eventDetail?.event?.qrcode ?? "";

  if (typeof qrCodeValue !== "string" || qrCodeValue.length === 0) {
    // Handle the case when qrCodeValue is not a valid string
    return <p>Invalid QR Code value</p>;
  }

  return (
    <div>
      <h1>{eventDetail?.event?.title}</h1>

      <Row gutter={16}>
        <Col span={12}>
          <Card title="Event Detail" className="event-info-card">
            <p>
              <strong>QR Code:</strong>
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <QRCode
                value={qrCodeValue}
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  width: "300",
                  padding: "16px",
                }}
              />
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Event Information" className="event-info-card">
            <p>
              <strong>Place:</strong> {eventDetail?.event?.place}
            </p>
            <p>
              <strong>Participant Count:</strong>{" "}
              {eventDetail?.event?.participantCount}
            </p>
            <p>
              <strong>Quota:</strong>{" "}
              {moment(eventDetail?.event?.quota).format("YYYY-MM-DD")}
            </p>
            <p>
              <strong>Event Date:</strong>{" "}
              {moment(eventDetail?.event?.event_date).format("YYYY-MM-DD")}
            </p>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="Organizer Information" className="event-info-card">
            <p>
              <strong>Name:</strong> {eventDetail?.event?.get_user?.name}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EventDetail;
