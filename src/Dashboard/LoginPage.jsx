import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import '../styles/login.css';

const LoginPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!email.includes('@') || password.length < 6) {
      setError('Invalid email or password (minimum 6 characters).');
      return;
    }

    // Mock authentication (replace with API call in production)
    alert('Login successful! Welcome to Kigali Plumbers Dashboard.');
    navigate('/dashboard');
  };

  return (
    <div className={`dashboard-container ${theme}`}>
      <main className="dashboard-content">
        <div className="login-container">
          <div className="login-content">
            <h1 className="page-title">Admin Login</h1>
            <p className="login-note">Access the Kigali Plumbers dashboard to manage services, inventory, and appointments.</p>
            {error && <p className="error-text text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="login-form space-y-4">
              <div className="settings-field">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@plumbers.com"
                  className="settings-input"
                  required
                />
              </div>
              <div className="settings-field">
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="settings-input"
                  required
                />
              </div>
              <button type="submit" className="save-btn">
                Sign In
              </button>
            </form>
            <p className="text-center mt-4">
              New to the dashboard?{' '}
              <a href="/dashboard/register" className="text-accent hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;