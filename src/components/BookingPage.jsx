import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/booking.css';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const selectedServices = query.get('services')?.split(',').map(Number) || [];

  const serviceMap = {
    1: 'Pipe Installation and Replacement',
    2: 'Leak Detection and Repair',
    3: 'Drain Cleaning and Unclogging',
    4: 'Water Heater Services',
    5: 'Emergency Plumbing Services',
    6: 'Sewer Line Repair and Replacement',
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingDetails = {
        ...formData,
        services: selectedServices.map((id) => serviceMap[id]).join(', '),
      };
      console.log('Form submitted:', bookingDetails);
      alert('Booking submitted! We will reach you as soon as possible.');
      navigate('/home');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit booking. Please try again.');
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-content max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <header className="booking-header text-center mb-6">
          <h1 className="booking-title text-2xl font-bold">Plumbing Booking Form</h1>
          <p className="booking-subtitle text-sm text-gray-600">
            123 Kigali, Remera, Kg 11 | KigaliPlumbers123@gmail.com | 07986338653
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
            <label className="form-label">Selected Service(s)</label>
            <p className="form-input bg-gray-100 p-2 rounded">
              {selectedServices.map((id) => serviceMap[id]).join(', ') || 'No service selected'}
            </p>
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