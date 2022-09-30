import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Row className="dash">
      <Col className="cols" md={6} sm={8} xs={12}>
        <Row className="rows"> banque</Row>
        <Row className="rows">
          <Col className="cols" sm={5} xs={12}>
            Users
          </Col>
          <Col className="cols" sm={7} xs={8}>
            stats
          </Col>
        </Row>
        <Row className="rows">messages</Row>
      </Col>
      <Col className="cols" md={6} sm={12} xs={12}>
        <Row className="rows">status</Row>
        <Row className="rows">infos</Row>
        <Row className="rows">meeting</Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
