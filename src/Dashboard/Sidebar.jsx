import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import '../styles/dashboard.css';

const Sidebar = ({ toggleTheme }) => {
  const { theme } = useTheme();

  return (
    <aside className="dashboard-sidebar">
      <nav className="dashboard-nav">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Overview
        </NavLink>
        <NavLink to="/dashboard/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Services
        </NavLink>
        <NavLink to="/dashboard/products" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Products
        </NavLink>
        <NavLink to="/dashboard/appointments" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Appointments
        </NavLink>
        <NavLink to="/dashboard/inventory" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Inventory
        </NavLink>
        <NavLink to="/dashboard/reports" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
      Reports
        </NavLink>
        <NavLink to="/dashboard/settings" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
             Settings
        </NavLink>
       
      </nav>
    </aside>
  );
};

export default Sidebar;