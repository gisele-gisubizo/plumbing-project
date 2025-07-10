import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { FaClock, FaTimes, FaEye } from 'react-icons/fa';
import Reschedule from './Reschedule';
import '../styles/appointment.css';

const Appointments = () => {
  const { theme } = useTheme();
  const [appointments, setAppointments] = useState([
    { id: 1, date: '07/10/2025', time: '10:00 AM', issue: 'Leaky Pipe', description: 'Water pooling under kitchen sink', status: 'Pending', client: 'Jane Doe', phone: '555-0123' },
    { id: 2, date: '07/09/2025', time: '02:00 PM', issue: 'Clogged Drain', description: 'Bathroom drain slow to drain', status: 'Completed', client: 'John Smith', phone: '555-0456' },
    { id: 3, date: '07/05/2025', time: '11:00 AM', issue: 'Water Heater', description: 'No hot water, thermostat issue', status: 'In Progress', client: 'Alice Brown', phone: '555-0789' },
  ]);
  const [filter, setFilter] = useState('today');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAppt = {
        id: appointments.length + 1,
        date: new Date().toLocaleDateString('en-US'),
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
        issue: 'New Booking',
        description: 'Automatic booking from service request',
        status: 'Pending',
        client: 'New Client',
        phone: '555-0000',
      };
      setAppointments((prev) => [...prev, newAppt]);
    }, 60000); // Every minute for demo
    return () => clearInterval(interval);
  }, [appointments.length]);

  const filterAppointments = () => {
    const now = new Date();
    return appointments.filter((appt) => {
      const apptDate = new Date(appt.date);
      const isToday = apptDate.toDateString() === now.toDateString();
      const isYesterday = apptDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString();
      const isLastWeek = apptDate >= new Date(now.setDate(now.getDate() - 7)) && !isToday && !isYesterday;
      const isLastMonth = apptDate >= new Date(now.setMonth(now.getMonth() - 1)) && !isLastWeek && !isYesterday && !isToday;
      if (filter === 'today') return isToday;
      if (filter === 'yesterday') return isYesterday;
      if (filter === 'lastweek') return isLastWeek;
      if (filter === 'lastmonth') return isLastMonth;
      return true;
    }).filter((appt) =>
      appt.issue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appt.client.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleReschedule = (updatedAppt) => {
    setAppointments(appointments.map((appt) => (appt.id === updatedAppt.id ? updatedAppt : appt)));
  };

  const filteredAppointments = filterAppointments();

  return (
    <div className="appointments-container">
      <h1 className="page-title">Appointments Hub</h1>
      <p className="appointments-note">Manage plumbing service bookings as of 08:14 PM CAT, Thursday, July 10, 2025.</p>

      <div className="appointments-filters">
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="lastweek">Last Week</option>
          <option value="lastmonth">Last Month</option>
          <option value="all">All</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by issue, description, or client"
          className="search-input"
        />
      </div>

      <div className="appointments-table">
        <table>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Issue</th>
              <th>Description</th>
              <th>Client</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appt) => (
              <tr key={appt.id}>
                <td className="date-time-cell">
                  <span>{appt.date}</span> <span>{appt.time}</span>
                </td>
                <td>{appt.issue}</td>
                <td>{appt.description}</td>
                <td>{appt.client} ({appt.phone})</td>
                <td>{appt.status}</td>
                <td>
                  <button className="action-btn reschedule" onClick={() => setSelectedAppointment(appt)}>
                    <FaClock /> Reschedule
                  </button>
                  <button className="action-btn cancel" onClick={() => {/* Cancel logic */}}>
                    <FaTimes /> Cancel
                  </button>
                  <button className="action-btn view" onClick={() => {/* View Details logic */}}>
                    <FaEye /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedAppointment && (
        <Reschedule
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          onReschedule={handleReschedule}
        />
      )}
    </div>
  );
};

export default Appointments;