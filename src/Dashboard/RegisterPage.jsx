import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import '../styles/register.css';

const RegisterPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Phone number must be 10 digits.');
      return;
    }

    // Mock registration (replace with API call in production)
    alert('Registration successful! Welcome to Kigali Plumbers Dashboard.');
    navigate('/dashboard');
  };

  return (
    <div className={`dashboard-container ${theme}`}>
      <main className="dashboard-content">
        <div className="register-container">
          <div className="register-content">
            <h1 className="page-title">Register for Dashboard</h1>
            <p className="register-note">Create an admin account for Kigali Plumbers dashboard.</p>
            {error && <p className="error-text text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="register-form space-y-4">
              <div className="settings-field">
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="settings-input"
                  required
                />
              </div>
              <div className="settings-field">
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="settings-input"
                  required
                />
              </div>
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
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="07986338653"
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
              <div className="settings-field">
                <label className="form-label">Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="settings-input"
                  required
                />
              </div>
              <button type="submit" className="save-btn">
                Register
              </button>
            </form>
            <p className="text-center mt-4">
              Already have an account?{' '}
              <a href="/dashboard/login" className="text-accent hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;