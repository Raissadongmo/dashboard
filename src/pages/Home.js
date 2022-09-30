import React from "react";
import Sidenavbar from "../components/Sidenavbar";
import Dashboard from "../components/Dashboard";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <Sidenavbar />
      <Dashboard />
    </div>
  );
};

export default Home;
