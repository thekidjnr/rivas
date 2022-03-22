import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
