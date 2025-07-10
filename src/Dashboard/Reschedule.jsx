import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import '../styles/reschedule.css';

const Reschedule = ({ appointment, onClose, onReschedule }) => {
  const { theme } = useTheme();
  const [newTime, setNewTime] = useState(appointment.time);

  const handleReschedule = () => {
    const [time, period] = newTime.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours, 10);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    const now = new Date();
    const apptDate = new Date(appointment.date);
    if (hours < now.getHours() + 1 && apptDate.toDateString() === now.toDateString()) {
      alert('Cannot reschedule to an hour less than one hour from now.');
      return;
    }
    const message = `Hello ${appointment.client}, your appointment for "${appointment.issue}" on ${appointment.date} has been rescheduled to ${newTime}. Contact us at 555-0000 if needed.`;
    alert(`Message sent to ${appointment.client} (${appointment.phone}): ${message}`); // Replace with SMS API
    onReschedule({ ...appointment, time: newTime });
    onClose();
  };

  const timeOptions = [];
  for (let h = 0; h < 24; h++) {
    timeOptions.push(`${h % 12 || 12}:00 ${h < 12 ? 'AM' : 'PM'}`);
  }

  return (
    <div className="reschedule-overlay">
      <div className="reschedule-modal">
        <h2>Reschedule Appointment</h2>
        <p>Issue: {appointment.issue}</p>
        <p>Current Time: {appointment.time}</p>
        <select value={newTime} onChange={(e) => setNewTime(e.target.value)} className="time-select">
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <div className="reschedule-actions">
          <button className="save-btn" onClick={handleReschedule}>
            Save
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reschedule;