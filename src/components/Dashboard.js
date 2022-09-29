import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="dash">
      <Row className="rows">
        <Col className="cols" sm={8} xs={12}>
          <Row className="rows"> banque</Row>
          <Row className="rows">
            <Col className="cols" sm={6} xs={6}>
              Users
            </Col>
            <Col className="cols" sm={6} xs={6}>
              stats
            </Col>
          </Row>
          <Row className="rows">messages</Row>
        </Col>
        <Col className="cols" sm={4} xs={12}>
          <Row className="rows">status</Row>
          <Row className="rows">infos</Row>
          <Row className="rows">meeting</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
