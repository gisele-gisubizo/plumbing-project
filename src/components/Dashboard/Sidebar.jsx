import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaUserTie,
  FaUsers,
  FaTools,
  FaChartLine,
  FaBoxes,
  FaStar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "../../styles/dashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">PlumbFix</h2>
      <nav className="nav-links">
        <NavLink to="/admin/dashboard" className="nav-item">
          <FaTachometerAlt /> Dashboard
        </NavLink>
        <NavLink to="/admin/bookings" className="nav-item">
          <FaBook /> Bookings
        </NavLink>
        <NavLink to="/admin/plumbers" className="nav-item">
          <FaUserTie /> Plumbers
        </NavLink>
        <NavLink to="/admin/customers" className="nav-item">
          <FaUsers /> Customers
        </NavLink>
        <NavLink to="/admin/services" className="nav-item">
          <FaTools /> Services
        </NavLink>
        <NavLink to="/admin/reports" className="nav-item">
          <FaChartLine /> Reports
        </NavLink>
        <NavLink to="/admin/inventory" className="nav-item">
          <FaBoxes /> Inventory
        </NavLink>
        <NavLink to="/admin/settings" className="nav-item">
          <FaStar />Settings
        </NavLink>
        <NavLink to="/admin/settings" className="nav-item">
          <FaCog /> Settings
        </NavLink>
      </nav>
      <button className="logout-btn">
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
