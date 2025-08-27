import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import DetailedEstimate from "./components/DetailedEstimate";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Top-level routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/detailed-estimate" element={<DetailedEstimate />} />
        {/* Catch-all route for 404 (optional) */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;