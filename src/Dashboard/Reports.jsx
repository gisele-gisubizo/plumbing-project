import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { FaDownload } from 'react-icons/fa';
import '../styles/report.css';

const Reports = () => {
  const { theme } = useTheme();
  const [appointments] = useState([
    { id: 1, date: '07/10/2025', time: '10:00 AM', issue: 'Leaky Pipe', description: 'Water pooling under kitchen sink', status: 'Pending', client: 'Jane Doe', phone: '555-0123' },
    { id: 2, date: '07/09/2025', time: '02:00 PM', issue: 'Clogged Drain', description: 'Bathroom drain slow to drain', status: 'Completed', client: 'John Smith', phone: '555-0456' },
    { id: 3, date: '07/05/2025', time: '11:00 AM', issue: 'Water Heater', description: 'No hot water, thermostat issue', status: 'In Progress', client: 'Alice Brown', phone: '555-0789' },
  ]);
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const now = new Date();
    const filtered = appointments.filter((appt) => {
      const apptDate = new Date(appt.date);
      const isMatchDate = !filterDate || apptDate.toLocaleDateString('en-US') === new Date(filterDate).toLocaleDateString('en-US');
      const isMatchStatus = filterStatus === 'all' || appt.status === filterStatus;
      return isMatchDate && isMatchStatus;
    });
    setReportData(filtered);
  }, [filterDate, filterStatus, appointments]);

  const getStatusCounts = () => {
    const counts = { Pending: 0, 'In Progress': 0, Completed: 0 };
    appointments.forEach((appt) => counts[appt.status]++);
    return counts;
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="reports-container">
      <h1 className="page-title">Reports Hub</h1>
      <p className="reports-note">Generate reports as of 11:10 AM CAT, Friday, July 11, 2025.</p>

      <div className="reports-filters">
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="filter-date"
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="filter-status">
          <option value="all">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="reports-summary">
        <h2>Summary</h2>
        <p>Pending: {statusCounts.Pending} | In Progress: {statusCounts['In Progress']} | Completed: {statusCounts.Completed}</p>
      </div>

      <div className="reports-table">
        <table>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Issue</th>
              <th>Client</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((appt) => (
              <tr key={appt.id}>
                <td className="date-time-cell">
                  <span>{appt.date}</span> <span>{appt.time}</span>
                </td>
                <td>{appt.issue}</td>
                <td>{appt.client} ({appt.phone})</td>
                <td>{appt.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="download-btn" onClick={() => alert('Download functionality to be implemented')}>
        <FaDownload /> Download Report
      </button>
    </div>
  );
};

export default Reports;