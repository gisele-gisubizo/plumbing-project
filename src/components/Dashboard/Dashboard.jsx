import React from "react";
import StatsCard from "./StatsCard";
import "../../styles/dashboard.css";

const Dashboard = () => {
  // Dummy data for recent bookings
  const recentBookings = [
    { id: 1, customer: "John Doe", plumber: "Peter", status: "Completed" },
    { id: 2, customer: "Jane Smith", plumber: "Paul", status: "Pending" },
    { id: 3, customer: "Michael Brown", plumber: "Sarah", status: "Completed" },
    { id: 4, customer: "Anna White", plumber: "Peter", status: "Pending" },
  ];

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="stats-grid">
        <StatsCard title="Total Bookings" value="120" />
        <StatsCard title="Active Plumbers" value="15" />
        <StatsCard title="Completed Jobs" value="95" />
        <StatsCard title="Pending Jobs" value="25" />
      </div>

      {/* Recent Bookings Table */}
      <div className="dashboard-section">
        <h2 className="section-title">Recent Bookings</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Plumber</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.plumber}</td>
                  <td
                    style={{
                      color: booking.status === "Completed" ? "green" : "#ff9900",
                      fontWeight: "600",
                    }}
                  >
                    {booking.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
    </div>
  );
};

export default Dashboard;
