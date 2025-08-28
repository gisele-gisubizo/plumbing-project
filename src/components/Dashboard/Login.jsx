import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css"; // Import the new CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for authentication logic
    console.log("Login attempt:", formData);
    // Redirect to dashboard after successful login (implement later)
    // Example: window.location.href = "/dashboard";
  };

  return (
    <div className="login-page">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icons">
            <i className="fa fa-tools" style={{ color: "var(--brand)" }}></i>
          </span>
          PlumbFix Admin
        </div>
      </nav>
      <div className="login-container">
        <div className="login-icon">
          <i className="fa fa-lock" style={{ color: "var(--brand)", fontSize: "2.5rem" }}></i>
        </div>
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Username or Email
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn-primary">
            Login
          </button>
          <div className="login-links">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;