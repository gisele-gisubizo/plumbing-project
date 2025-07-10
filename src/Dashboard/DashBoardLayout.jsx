import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../styles/dashboard.css';

const DashBoardLayout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoardLayout;