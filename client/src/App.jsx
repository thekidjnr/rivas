import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Properties from "./pages/Properties/Properties";
import AmasamanDets from "./pages/AmasamanFullDets/AmasamanFullDets";
import PokuaseDets from "./pages/PokuaseFullDets/PokuaseFullDets";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/1" element={<AmasamanDets />} />
        <Route path="/properties/2" element={<PokuaseDets />} />
      </Routes>
    </Router>
  );
};

export default App;
