import React from 'react';
import '../styles/home.css';
import PipeWrench from '../assets/PipeWrench.jpg';
import Plunger from '../assets/Plunger.jpg';
import WaterPump from '../assets/WaterPump.jpg';
import PressureGauge from '../assets/PressureGauge.jpg'; // Added for the 4th item

const Home = () => {
  const featuredItems = [
    { id: 1, name: 'Pipe Wrench', price: 25, image: PipeWrench },
    { id: 2, name: 'Plunger', price: 15, image: Plunger },
    { id: 3, name: 'Water Pump', price: 150, image: WaterPump },
    { id: 4, name: 'Pressure Gauge', price: 30, image: PressureGauge },
  ];

  const services = [
    {
      id: 1,
      title: 'Plumbing Installation',
      description: 'Expert setup of pipes and fixtures.',
    },
    {
      id: 2,
      title: 'Leak Repair',
      description: 'Quick fixes for leaks and damages.',
    },
    {
      id: 3,
      title: 'Maintenance',
      description: 'Regular checks for efficiency.',
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Plumbing Pros</h1>
        <p className="hero-subtitle">Your trusted source for plumbing tools and services.</p>
        <button className="cta-button">Contact Us Today</button>
      </section>

      {/* Featured Items Section */}
      <section className="featured-items">
        <h2 className="section-title">Featured Tools</h2>
        <div className="content-area">
          <div className="masonry-grid">
            {featuredItems.map((item) => (
              <div key={item.id} className="masonry-item">
                <div className="product-card">
                  <div className="image-container">
                    <img src={item.image} alt={item.name} className="product-image" />
                    <div className="overlay">
                      <span className="overlay-text">View Details</span>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="price-tag">From ${item.price}</span>
                    <h3 className="product-name">{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Icons/Quick Links Section */}
      <section className="quick-links-section">
        <h2 className="section-title">Quick Access</h2>
        <div className="icons-grid">
          <div className="icon-card">
            <span className="icon">📞</span>
            <p>Call Us</p>
          </div>
          <div className="icon-card">
            <span className="icon">✉️</span>
            <p>Email Us</p>
          </div>
          <div className="icon-card">
            <span className="icon">🕒</span>
            <p>24/7 Support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;