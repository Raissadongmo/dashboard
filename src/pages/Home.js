import React from "react";
import Sidenavbar from "../components/Sidenavbar";
import Dashboard from "../components/Dashboard";
import "./home.scss";
const Home = () => {
  return (
    <div className="flex">
      <Sidenavbar />
      <Dashboard />
    </div>
  );
};

export default Home;
