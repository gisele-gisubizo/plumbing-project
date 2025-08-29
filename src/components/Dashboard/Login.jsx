import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

 
 useEffect(() => {
  // Only redirect if already logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    navigate("/admin/dashboard");
  }
}, [navigate]);

// Add this for debugging/testing:
useEffect(() => {
  localStorage.removeItem("isLoggedIn"); // Clears previous login
}, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example authentication (replace with real API)
    if (formData.username === "admin" && formData.password === "password") {
      // Save login status to localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", formData.username);

      // Redirect to dashboard
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
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
