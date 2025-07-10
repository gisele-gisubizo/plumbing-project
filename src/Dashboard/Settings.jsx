import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import '../styles/settings.css';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [timeZone, setTimeZone] = useState('Eastern Time (ET)');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [alerts, setAlerts] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleSave = () => {
    if (password && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Settings saved! Password: ${password ? 'Updated' : 'Unchanged'}, Time Zone: ${timeZone}, Date Format: ${dateFormat}, Email: ${emailNotifications}, SMS: ${smsNotifications}, Alerts: ${alerts}, Auto-Save: ${autoSave}, Theme: ${theme}`);
    // Add API call here in a real app
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to permanently delete your account? This action cannot be undone.')) {
      alert('Account deleted!'); // Replace with API call to delete account
      setShowDeleteConfirm(false);
    }
  };

  return (
    <div className="settings-container">
      <h1 className="page-title">Settings</h1>
      <p className="settings-note">Configure your preferences as of 07:14 PM CAT, July 10, 2025.</p>

      {/* Theme Toggle */}
      <div className="settings-section">
        <h2>Theme</h2>
        <label className="switch">
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
        <span>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</span>
      </div>

      {/* Security Settings */}
      <div className="settings-section">
        <h2>Security</h2>
        <div className="settings-field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="settings-input"
            placeholder="Enter new password"
          />
        </div>
        <div className="settings-field">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="settings-input"
            placeholder="Confirm new password"
          />
        </div>
      </div>

      {/* Preferences */}
      <div className="settings-section">
        <h2>Preferences</h2>
        <div className="settings-field">
          <label>Time Zone:</label>
          <select value={timeZone} onChange={(e) => setTimeZone(e.target.value)} className="settings-select">
            <option value="Eastern Time (ET)">Eastern Time (ET)</option>
            <option value="Central Time (CT)">Central Time (CT)</option>
            <option value="Pacific Time (PT)">Pacific Time (PT)</option>
          </select>
        </div>
        <div className="settings-field">
          <label>Date Format:</label>
          <select value={dateFormat} onChange={(e) => setDateFormat(e.target.value)} className="settings-select">
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="settings-section">
        <h2>Notifications</h2>
        <div className="settings-field">
          <label>Email Notifications:</label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
          />
        </div>
        <div className="settings-field">
          <label>SMS Notifications:</label>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={(e) => setSmsNotifications(e.target.checked)}
          />
        </div>
        <div className="settings-field">
          <label>Alerts:</label>
          <input
            type="checkbox"
            checked={alerts}
            onChange={(e) => setAlerts(e.target.checked)}
          />
        </div>
        <div className="settings-field">
          <label>Auto-Save:</label>
          <input
            type="checkbox"
            checked={autoSave}
            onChange={(e) => setAutoSave(e.target.checked)}
          />
        </div>
      </div>

      {/* Danger Zone */}
      <div className="settings-section danger-zone">
        <h2>Danger Zone</h2>
        <button className="delete-btn" onClick={() => setShowDeleteConfirm(true)}>
          Delete Account
        </button>
        {showDeleteConfirm && (
          <div className="confirm-delete">
            <p>Are you sure? This will permanently remove your account and data.</p>
            <button className="confirm-btn" onClick={handleDeleteAccount}>
              Confirm Delete
            </button>
            <button className="cancel-btn" onClick={() => setShowDeleteConfirm(false)}>
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Save Button */}
      <button className="save-btn" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
};

export default Settings;