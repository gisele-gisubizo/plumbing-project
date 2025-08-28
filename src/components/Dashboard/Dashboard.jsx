import React from "react";
import StatsCard from "./StatsCard";
import "../../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard Overview</h1>
      <div className="stats-grid">
        <StatsCard title="Total Bookings" value="120" />
        <StatsCard title="Active Plumbers" value="15" />
        <StatsCard title="Completed Jobs" value="95" />
        <StatsCard title="Pending Jobs" value="25" />
      </div>
    </div>
  );
};

export default Dashboard;
