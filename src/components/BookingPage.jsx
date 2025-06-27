import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/booking.css';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    description: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const services = query.get('services')?.split(',').map(Number) || [];
  const product = query.get('product') || '';

  const serviceMap = {
    1: 'Pipe Installation and Replacement',
    2: 'Leak Detection and Repair',
    3: 'Drain Cleaning and Unclogging',
    4: 'Water Heater Services',
    5: 'Emergency Plumbing Services',
  };

  const defaultDescription = services
    .map((id) => serviceMap[id])
    .concat(product ? [product] : [])
    .filter(Boolean)
    .join(', ');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Booking submitted! We will reach you as soon as possible.');
    navigate('/home');
  };

  return (
    <div className="booking-container ml-64">
      <div className="booking-content max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <header className="booking-header text-center mb-6">
          <h1 className="booking-title text-2xl font-bold">Plumbing Booking Form</h1>
          <p className="booking-subtitle text-sm text-gray-600">
            Company Address | Company Email | Company Website | Company Number
          </p>
          <p className="booking-instruction text-gray-700 mt-2">
            Please fill out the form below to schedule your plumbing service.
          </p>
          <p className="booking-assurance text-green-600 font-semibold mt-1">
            We will reach you as soon as possible!
          </p>
        </header>

        <form onSubmit={handleSubmit} className="booking-form space-y-4">
          <div className="form-group">
            <label className="form-label">Name *</label>
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="form-input flex-1"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="form-input flex-1"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(000) 000-0000"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@domain.com"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your location"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Describe the Problem</label>
            <textarea
              name="description"
              value={formData.description || defaultDescription}
              onChange={handleChange}
              placeholder="Please describe the plumbing issue in detail..."
              className="form-input h-24"
            ></textarea>
          </div>
          <button type="submit" className="book-service-btn">
            Book Service Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;