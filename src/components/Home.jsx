import React from 'react';
import { Link } from 'react-router-dom'; // For navigation to products/services
import '../styles/home.css';
import PipeWrench from '../assets/PipeWrench.jpg';
import Plunger from '../assets/Plunger.jpg';
import WaterPump from '../assets/WaterPump.jpg';
import PressureGauge from '../assets/PressureGauge.jpg';
import PVC from '../assets/PVC.jpg'; // Added for more items
import Drain from '../assets/Drain.jpg'; // Added for more items

const Home = () => {
  const featuredItems = [
    { id: 1, name: 'Pipe Wrench', price: 25000, image: PipeWrench },
    { id: 2, name: 'Plunger', price: 1500, image: Plunger },
    { id: 3, name: 'Water Pump', price: 15000, image: WaterPump },
    { id: 4, name: 'Pressure Gauge', price: 3000, image: PressureGauge },
    { id: 5, name: 'PVC Pipe Cutter', price: 3000, image: PVC }, // New item
    { id: 6, name: 'Drain Snake', price: 35500, image: Drain }, // New item
  ];

  const services = [
    {
      id: 1,
      title: 'Plumbing Installation',
      description: 'Expert setup of pipes and fixtures with high-quality materials.',
    },
    {
      id: 2,
      title: 'Leak Repair',
      description: 'Quick fixes for leaks and damages using advanced detection tools.',
    },
    {
      id: 3,
      title: 'Maintenance',
      description: 'Regular checks for efficiency and preventive care.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Plumbing Pros fixed my leak in no time! Highly recommend their services.',
      location: 'Kigali, Remera',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Great team, affordable prices, and 24/7 support. Amazing experience!',
      location: 'Kigali, Kimihurura',
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Plumbing Pros</h1>
        <p className="hero-subtitle">Your trusted source for plumbing tools and professional services in Kigali.</p>
        <button className="cta-button" onClick={() => window.location.href = '/products'}>
          Explore Our Solutions
        </button>
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
                      <Link to={`/hardware/${item.id}`} className="overlay-text">
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="price-tag">FRW {item.price.toLocaleString()}</span>
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
              <Link to="/service" className="cta-button service-cta">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.name}, {testimonial.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-details">
          <p><strong>Address:</strong> 123 Kigali, Remera, Kg 11</p>
          <p><strong>Phone:</strong> 07986338653</p>
          <p><strong>Email:</strong> KigaliPlumbers123@gmail.com</p>
          <p><strong>Hours:</strong> 24/7 Support Available</p>
          <button className="cta-button" onClick={() => window.location.href = '/booking'}>
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;