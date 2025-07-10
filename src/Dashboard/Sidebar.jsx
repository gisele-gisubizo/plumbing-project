import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/dashboard.css';

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <nav className="dashboard-nav">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Overview
        </NavLink>
        <NavLink to="/dashboard/orders" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Orders
        </NavLink>
        <NavLink to="/dashboard/profile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Profile
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;