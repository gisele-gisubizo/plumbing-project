import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useTheme } from './ThemeContext';
import '../styles/dashboard.css';

const DashBoardLayout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="dashboard-container">
      <Sidebar toggleTheme={toggleTheme} />
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoardLayout;