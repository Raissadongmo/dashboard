import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="dash">
      <Row>
        <Col>
          <Row> banque</Row>
          <Row>
            <Col>Users</Col>
            <Col>stats</Col>
          </Row>
          <Row>messages</Row>
        </Col>
        <Col>
          <Row>status</Row>
          <Row>infos</Row>
          <Row>meeting</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
