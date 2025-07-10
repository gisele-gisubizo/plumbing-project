import React, { useState } from 'react';
import { FaWrench, FaTint, FaSink, FaHotTub, FaClock, FaExclamationTriangle } from 'react-icons/fa';
import '../styles/service.css';

const Service = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Faucet Repair',
      category: 'Repair',
      status: 'active',
      cost: '$50 - $100',
      duration: '1-2 hours',
      icon: <FaWrench />,
    },
    {
      id: 2,
      title: 'Toilet Installation',
      category: 'Installation',
      status: 'active',
      cost: '$100 - $200',
      duration: '2-4 hours',
      icon: <FaTint />,
    },
    {
      id: 3,
      title: 'Shower Head Replacement',
      category: 'Installation',
      status: 'active',
      cost: '$30 - $70',
      duration: '1 hour',
      icon: <FaSink />,
    },
    {
      id: 4,
      title: 'Water Heater Maintenance',
      category: 'Maintenance',
      status: 'active',
      cost: '$80 - $150',
      duration: '2-3 hours',
      icon: <FaHotTub />,
    },
    {
      id: 5,
      title: 'Emergency Drain Cleaning',
      category: 'Emergency',
      status: 'active',
      cost: '$120 - $250',
      duration: '1-3 hours',
      icon: <FaClock />,
    },
    {
      id: 6,
      title: 'Unclogging Service',
      category: 'Repair',
      status: 'inactive',
      cost: '$60 - $120',
      duration: '1-2 hours',
      icon: <FaExclamationTriangle />,
    },
  ]);

  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [newService, setNewService] = useState({
    title: '',
    category: 'Repair',
    status: 'active',
    cost: '',
    duration: '',
  });

  const categories = ['Repair', 'Installation', 'Maintenance', 'Emergency'];
  const statuses = ['active', 'inactive'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category') setFilterCategory(value);
    if (name === 'status') setFilterStatus(value);
  };

  const handleNewServiceChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddService = (e) => {
    e.preventDefault();
    if (newService.title && newService.cost && newService.duration) {
      setServices([
        ...services,
        {
          id: services.length + 1,
          ...newService,
          icon: <FaWrench />, // Default icon; can be customized later
        },
      ]);
      setNewService({ title: '', category: 'Repair', status: 'active', cost: '', duration: '' });
    }
  };

  const filteredServices = services.filter((service) => {
    return (
      (filterCategory === '' || service.category === filterCategory) &&
      (filterStatus === '' || service.status === filterStatus)
    );
  });

  return (
    <div className="services-container">
      <h1 className="page-title">Service Management</h1>
      <p className="services-note">Manage plumbing services, bookings, and status as of 06:17 PM CAT, July 10, 2025.</p>

      {/* Filter Section */}
      <div className="filter-section">
        <select name="category" value={filterCategory} onChange={handleFilterChange} className="filter-select">
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select name="status" value={filterStatus} onChange={handleFilterChange} className="filter-select">
          <option value="">All Statuses</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {filteredServices.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">
              Category: {service.category} | Status: {service.status} | Cost: {service.cost} | Duration: {service.duration}
            </p>
            {/* Add edit/delete functionality later */}
          </div>
        ))}
      </div>

      {/* Add New Service Form */}
      <div className="add-service-section">
        <h2 className="add-service-title">Add New Service</h2>
        <form onSubmit={handleAddService} className="add-service-form">
          <input
            type="text"
            name="title"
            value={newService.title}
            onChange={handleNewServiceChange}
            placeholder="Service Title (e.g., Faucet Repair)"
            className="form-input"
            required
          />
          <select
            name="category"
            value={newService.category}
            onChange={handleNewServiceChange}
            className="form-select"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            name="status"
            value={newService.status}
            onChange={handleNewServiceChange}
            className="form-select"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="cost"
            value={newService.cost}
            onChange={handleNewServiceChange}
            placeholder="Cost Range (e.g., $50 - $100)"
            className="form-input"
            required
          />
          <input
            type="text"
            name="duration"
            value={newService.duration}
            onChange={handleNewServiceChange}
            placeholder="Duration (e.g., 1-2 hours)"
            className="form-input"
            required
          />
          <button type="submit" className="add-service-btn">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default Service;