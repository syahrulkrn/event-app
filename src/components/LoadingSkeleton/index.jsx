import { Card, Col, Row, Skeleton } from "antd";

const LoadingSkeleton = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card>
          <Skeleton paragraph={{ rows: 6 }} active />
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          <Skeleton paragraph={{ rows: 6 }} active />
        </Card>
      </Col>
    </Row>
  );
};

export default LoadingSkeleton;
