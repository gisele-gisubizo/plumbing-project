import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../../styles/dashboard.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
