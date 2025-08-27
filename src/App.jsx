import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Guide from "./components/Guide";
import DetailedEstimate from "./components/DetailedEstimate"; // Add this import
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/detailed-estimate" element={<DetailedEstimate />} /> {/* Add this route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;