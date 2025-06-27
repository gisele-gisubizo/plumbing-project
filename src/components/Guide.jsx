import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/guide.css';

const TroubleshootingGuide = () => {
  const [answers, setAnswers] = useState({
    hasLeak: false,
    hasClog: false,
    noHotWater: false,
    emergency: false,
    otherIssue: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnswers((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const getSuggestedServices = () => {
    const suggestions = [];
    if (answers.hasLeak) suggestions.push('Leak Detection and Repair');
    if (answers.hasClog) suggestions.push('Drain Cleaning and Unclogging');
    if (answers.noHotWater) suggestions.push('Water Heater Services');
    if (answers.emergency) suggestions.push('Emergency Plumbing Services');
    if (answers.otherIssue) suggestions.push('Please describe for custom assistance');
    return suggestions.length > 0 ? suggestions.join(', ') : 'No specific issues identified. Consider a general check-up.';
  };

  const handleNext = () => {
    const suggestion = getSuggestedServices();
    navigate('/booking?description=' + encodeURIComponent(suggestion));
  };

  return (
    <div className="troubleshooting-container ml-64">
      <div className="troubleshooting-content max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <header className="troubleshooting-header text-center mb-6">
          <h1 className="troubleshooting-title text-2xl font-bold">Plumbing Troubleshooting Guide</h1>
          <p className="troubleshooting-subtitle text-sm text-gray-600">
            Not sure what you need? Let’s identify your plumbing issue!
          </p>
        </header>

        <form className="troubleshooting-form space-y-4">
          <div className="form-group">
            <label className="form-label">
              <input
                type="checkbox"
                name="hasLeak"
                checked={answers.hasLeak}
                onChange={handleChange}
                className="form-checkbox"
              />
              I have a leak (e.g., dripping faucet, wet walls)
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              <input
                type="checkbox"
                name="hasClog"
                checked={answers.hasClog}
                onChange={handleChange}
                className="form-checkbox"
              />
              I have a clog or slow drain
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              <input
                type="checkbox"
                name="noHotWater"
                checked={answers.noHotWater}
                onChange={handleChange}
                className="form-checkbox"
              />
              I have no hot water or heater issues
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              <input
                type="checkbox"
                name="emergency"
                checked={answers.emergency}
                onChange={handleChange}
                className="form-checkbox"
              />
              This is an emergency (e.g., burst pipe, no water)
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Other Issue (describe if applicable)</label>
            <input
              type="text"
              name="otherIssue"
              value={answers.otherIssue}
              onChange={handleChange}
              placeholder="e.g., sewer backup, low pressure"
              className="form-input"
            />
          </div>

          <div className="suggestion-section">
            <h2 className="suggestion-title text-lg font-semibold mb-2">Suggested Services</h2>
            <p className="suggestion-text text-gray-700">{getSuggestedServices()}</p>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="troubleshooting-btn"
          >
            Proceed to Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default TroubleshootingGuide;