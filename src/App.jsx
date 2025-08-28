import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import DetailedEstimate from "./components/DetailedEstimate";
import Login from "./components/Dashboard/Login";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import Bookings from "./components/Dashboard/Bookings";
import Plumbers from "./components/Dashboard/Plumbers";
import Customers from "./components/Dashboard/Customers";
import Services from "./components/Dashboard/Services";
import Reports from "./components/Dashboard/Reports";
import Inventory from "./components/Dashboard/Inventory";
import Reviews from "./components/Dashboard/Reviews";
import Settings from "./components/Dashboard/Settings";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/detailed-estimate" element={<DetailedEstimate />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="plumbers" element={<Plumbers />} />
          <Route path="customers" element={<Customers />} />
          <Route path="services" element={<Services />} />
          <Route path="reports" element={<Reports />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
