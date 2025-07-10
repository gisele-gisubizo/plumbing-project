import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/guide.css';

const TroubleshootingGuide = () => {
  const [answers, setAnswers] = useState({
    issueDetails: '', // Start empty for user input
    severity: 'low', // Options: low, medium, high
    location: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedServices = query.get('services') ? query.get('services').split(',').map(Number) : [];

  const serviceMap = {
    1: 'Pipe Installation and Replacement',
    2: 'Leak Detection and Repair',
    3: 'Drain Cleaning and Unclogging',
    4: 'Water Heater Services',
    5: 'Emergency Plumbing Services',
    6: 'Sewer Line Repair and Replacement',
  };

  useEffect(() => {
    // No pre-filling of issueDetails; just ensure state is initialized
  }, [selectedServices]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    const { issueDetails, severity, location } = answers;
    if (issueDetails && severity && location) {
      const params = new URLSearchParams({
        services: selectedServices.join(','),
        description: encodeURIComponent(`${issueDetails} - Severity: ${severity}, Location: ${location}`),
      }).toString();
      navigate(`/booking?${params}`);
    } else {
      alert('Please fill in all fields before proceeding.');
    }
  };

  return (
    <div className="troubleshooting-container ml-64">
      <div className="troubleshooting-content max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <header className="troubleshooting-header text-center mb-6">
          <h1 className="troubleshooting-title text-2xl font-bold">Plumbing Troubleshooting Guide</h1>
          <p className="troubleshooting-subtitle text-sm text-gray-600">
            Provide details about your selected service to assist us better!
          </p>
        </header>

        <form className="troubleshooting-form space-y-4">
          <div className="form-group">
            <label className="form-label">Selected Service(s)</label>
            <p className="form-input bg-gray-100 p-2 rounded">
              {selectedServices.map((id) => serviceMap[id]).join(', ') || 'No service selected'}
            </p>
          </div>
          <div className="form-group">
            <label className="form-label">Describe Your Issue</label>
            <input
              type="text"
              name="issueDetails"
              value={answers.issueDetails}
              onChange={handleChange}
              placeholder="e.g., leak in kitchen sink, noisy water heater"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Severity</label>
            <select name="severity" value={answers.severity} onChange={handleChange} className="form-input">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Location of Issue</label>
            <input
              type="text"
              name="location"
              value={answers.location}
              onChange={handleChange}
              placeholder="e.g., bathroom, basement"
              className="form-input"
              required
            />
          </div>

          <button type="button" onClick={handleNext} className="troubleshooting-btn">
            Proceed to Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default TroubleshootingGuide;