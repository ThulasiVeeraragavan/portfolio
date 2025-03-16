import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiApachekafka,
  SiApacheflink,
  SiRabbitmq ,
  SiTwilio,
  SiMailgun,
  SiAmazoncloudwatch,
  SiGrafana  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazoncloudwatch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheflink/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTwilio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMailgun/>
      </Col>
    </Row>
  );
}

export default Toolstack;
