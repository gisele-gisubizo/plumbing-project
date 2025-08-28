import React from "react";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import "../../styles/dashboard.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="topbar-icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon profile-icon" />
      </div>
    </div>
  );
};

export default Topbar;
