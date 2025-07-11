import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { FaCalendarAlt, FaTools, FaChartBar, FaUsers } from 'react-icons/fa';
import '../styles/overview.css';

const DashBoardView = () => {
  const { theme } = useTheme();
  const [appointments] = useState([
    { id: 1, date: '07/10/2025', time: '10:00 AM', issue: 'Leaky Pipe', status: 'Pending', client: 'Jane Doe' },
    { id: 2, date: '07/09/2025', time: '02:00 PM', issue: 'Clogged Drain', status: 'Completed', client: 'John Smith' },
    { id: 3, date: '07/05/2025', time: '11:00 AM', issue: 'Water Heater', status: 'In Progress', client: 'Alice Brown' },
  ]);
  const [inventory] = useState([
    { id: 1, name: 'PVC Pipe (1 inch)', stock: 50, threshold: 10 },
    { id: 2, name: 'Wrench Set', stock: 5, threshold: 3 },
    { id: 3, name: 'Teflon Tape', stock: 100, threshold: 20 },
  ]);
  const [services] = useState([
    { id: 1, title: 'Faucet Repair', status: 'active' },
    { id: 2, title: 'Toilet Installation', status: 'active' },
    { id: 3, title: 'Unclogging Service', status: 'inactive' },
  ]);

  const [metrics, setMetrics] = useState({
    totalAppointments: 0,
    pendingAppointments: 0,
    lowStockItems: 0,
    activeServices: 0,
  });

  useEffect(() => {
    const totalAppointments = appointments.length;
    const pendingAppointments = appointments.filter((a) => a.status === 'Pending').length;
    const lowStockItems = inventory.filter((i) => i.stock <= i.threshold).length;
    const activeServices = services.filter((s) => s.status === 'active').length;
    setMetrics({ totalAppointments, pendingAppointments, lowStockItems, activeServices });
  }, [appointments, inventory, services]);

  const chartData = [
    { label: 'Pending', value: metrics.pendingAppointments },
    { label: 'Completed', value: appointments.filter((a) => a.status === 'Completed').length },
    { label: 'In Progress', value: appointments.filter((a) => a.status === 'In Progress').length },
  ];

  return (
    <div className="overview-container">
      <h1 className="page-title">Dashboard Overview</h1>
      <p className="overview-note">Summary of operations as of 11:26 AM CAT, Friday, July 11, 2025.</p>

      {/* Quick Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <FaCalendarAlt className="metric-icon" />
          <h3>Total Appointments</h3>
          <p>{metrics.totalAppointments}</p>
        </div>
        <div className="metric-card">
          <FaCalendarAlt className="metric-icon" />
          <h3>Pending Appointments</h3>
          <p>{metrics.pendingAppointments}</p>
        </div>
        <div className="metric-card">
          <FaTools className="metric-icon" />
          <h3>Low Stock Items</h3>
          <p>{metrics.lowStockItems}</p>
        </div>
        <div className="metric-card">
          <FaUsers className="metric-icon" />
          <h3>Active Services</h3>
          <p>{metrics.activeServices}</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <a href="/dashboard/appointments" className="link-card">
          <FaCalendarAlt /> Appointments
        </a>
        <a href="/dashboard/inventory" className="link-card">
          <FaTools /> Inventory
        </a>
        <a href="/dashboard/service" className="link-card">
          <FaChartBar /> Services
        </a>
        <a href="/dashboard/reports" className="link-card">
          <FaChartBar /> Reports
        </a>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <h2>Appointment Status Breakdown</h2>
        <canvas id="appointmentChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default DashBoardView;