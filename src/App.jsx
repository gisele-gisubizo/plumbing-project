import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import DetailedEstimate from "./components/DetailedEstimate";
import Login from "./components/Dashboard/Login"; // New login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/detailed-estimate" element={<DetailedEstimate />} />
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route index element={<DashBoardView />} />
          {/* Add more dashboard routes here later (e.g., /appointments) */}
        </Route>
        <Route path="/login" element={<Login />} /> {/* New login route */}
      </Routes>
    </Router>
  );
}

export default App;