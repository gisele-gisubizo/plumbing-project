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
  FaSignOutAlt,
} from "react-icons/fa";
import "../../styles/dashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <h2 className="logo">PlumbFix</h2>
        <nav className="nav-links-dashboard">
          <NavLink to="/admin/dashboard" className="nav-item-dashboard">
            <FaTachometerAlt /> Dashboard
          </NavLink>
          <NavLink to="/admin/bookings" className="nav-item-dashboard">
            <FaBook /> Bookings
          </NavLink>
          <NavLink to="/admin/plumbers" className="nav-item-dashboard">
            <FaUserTie /> Plumbers
          </NavLink>
          <NavLink to="/admin/customers" className="nav-item-dashboard">
            <FaUsers /> Customers
          </NavLink>
          <NavLink to="/admin/services" className="nav-item-dashboard">
            <FaTools /> Services
          </NavLink>
          <NavLink to="/admin/reports" className="nav-item-dashboard">
            <FaChartLine /> Reports
          </NavLink>
          <NavLink to="/admin/inventory" className="nav-item-dashboard">
            <FaBoxes /> Inventory
          </NavLink>
        </nav>
      </div>
      <button className="logout-btn">
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
