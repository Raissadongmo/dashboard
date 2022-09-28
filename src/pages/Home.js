import React from "react";
import Sidenavbar from "../components/Sidenavbar";
import Dashboard from "../components/Dashboard";
import "./home.scss";
const Home = () => {
  return (
    <div className="nav">
      <Sidenavbar />
      <Dashboard />
    </div>
  );
};

export default Home;
