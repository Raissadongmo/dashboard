import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/setting.scss";
import Page404 from "./components/Page404";
import UnderConstruction from "./components/UnderConstruction";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bank" element={<UnderConstruction />} />
        <Route path="/stats" element={<UnderConstruction />} />
        <Route path="/message" element={<UnderConstruction />} />
        <Route path="/videos" element={<UnderConstruction />} />
        <Route path="/users" element={<UnderConstruction />} />
        <Route path="/files" element={<UnderConstruction />} />
        <Route path="/campaign" element={<UnderConstruction />} />
        <Route path="/parameters" element={<UnderConstruction />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
