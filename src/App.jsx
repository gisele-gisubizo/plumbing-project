import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import DetailedEstimate from "./components/DetailedEstimate";
import Login from "./components/Dashboard/Login"; // Updated path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/detailed-estimate" element={<DetailedEstimate />} />
        <Route path="/login" element={<Login />} /> {/* Admin login route */}
      </Routes>
    </Router>
  );
}

export default App;