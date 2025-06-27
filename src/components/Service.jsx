import React, { useState } from 'react';
import { FaWrench, FaTint, FaSink, FaHotTub, FaClock, FaExclamationTriangle } from 'react-icons/fa'; // Added FaExclamationTriangle for Sewer Line
import '../styles/service.css';

const Service = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    {
      id: 1,
      title: 'Pipe Installation and Replacement',
      description: 'Our expert plumbers handle the installation and replacement of pipes for residential and commercial properties. We use high-quality materials to ensure durability and efficiency, addressing leaks, corrosion, or outdated systems with precision. Services include copper, PVC, and PEX piping solutions tailored to your needs.',
      icon: <FaWrench />,
    },
    {
      id: 2,
      title: 'Leak Detection and Repair',
      description: 'We specialize in identifying and repairing leaks using advanced detection tools to minimize water damage. Our team addresses hidden leaks in walls, floors, or underground systems, offering quick fixes and long-term solutions to prevent mold growth and water wastage.',
      icon: <FaTint />,
    },
    {
      id: 3,
      title: 'Drain Cleaning and Unclogging',
      description: 'Our drain cleaning services tackle clogs caused by grease, hair, or debris using hydro-jetting and snaking techniques. We ensure your drains flow smoothly, preventing backups and maintaining hygiene with eco-friendly methods suitable for kitchens, bathrooms, and sewers.',
      icon: <FaSink />,
    },
    {
      id: 4,
      title: 'Water Heater Services',
      description: 'We provide installation, repair, and maintenance for tank and tankless water heaters. Our services ensure optimal performance, energy efficiency, and hot water availability, including troubleshooting issues like leaks, strange noises, or insufficient heating.',
      icon: <FaHotTub />,
    },
    {
      id: 5,
      title: 'Emergency Plumbing Services',
      description: 'Available 24/7, our emergency team responds to urgent issues like burst pipes, severe leaks, or no water supply. We prioritize rapid response to minimize damage, offering reliable solutions even during holidays or off-hours.',
      icon: <FaClock />,
    },
    {
      id: 6,
      title: 'Sewer Line Repair and Replacement',
      description: 'We offer expert repair and replacement of sewer lines to address blockages, cracks, or collapses. Using trenchless technology and thorough inspections, we restore functionality, prevent sewage backups, and ensure compliance with local regulations.',
      icon: <FaExclamationTriangle />, // Icon for urgency and importance
    },
  ];

  const handleChoose = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]
    );
  };

  return (
    <div className="services-container">
      <h1 className="page-title">Our Plumbing Services</h1>
      <p className="services-note">We offer a comprehensive range of plumbing services to meet all your needs.</p>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="button-container">
              <button
                className={`choose-button ${selectedServices.includes(service.id) ? 'selected' : ''}`}
                onClick={() => handleChoose(service.id)}
              >
                {selectedServices.includes(service.id) ? 'Chosen' : 'Choose'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;