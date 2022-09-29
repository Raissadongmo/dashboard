import React from "react";
import Sidenavbar from "../components/Sidenavbar";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <div className="home d-flex">
      <Sidenavbar />
      <Dashboard />
    </div>
  );
};

export default Home;
