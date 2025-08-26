import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { FaTools, FaUsers, FaStar, FaClock } from "react-icons/fa"; // React Icons

import PVC from "../assets/PVC.jpg";
import Drain from "../assets/Drain.jpg";
import PipeWrench from "../assets/PipeWrench.jpg";
import PipeThreader from "../assets/PipeThreader.jpg";
import PressureGauge from "../assets/PressureGauge.jpg";

import WaterPump from "../assets/WaterPump.jpg";
import Pipe from "../assets/Pipe.jpg";
import Compression from "../assets/Compression.jpg";

import Peter from "../assets/Peter.jpg";
import Paul from "../assets/Paul.jpg";
import Sarah from "../assets/Sarah.jpg";

const Home = () => {
  const heroImages = [PVC, Drain, PipeWrench, PipeThreader, PressureGauge];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const about = document.getElementById("about");
      if (about) about.scrollIntoView({ behavior: "smooth" });
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const storyImages = [PipeWrench, PipeThreader, PressureGauge];
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((i) => (i + 1) % storyImages.length);
    }, 4000); // switch every 4 seconds
    return () => clearInterval(interval);
  }, [storyImages.length]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">PlumbFix</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-slides">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`slide ${i === currentImage ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="overlay" />
        <div className="hero-content">
          <h1>Fast Plumbing Repair — When You Need It Most.</h1>
          <p>Same-day service. Certified plumbers. 100% satisfaction guarantee.</p>
          <div className="buttons">
            <button className="btn-primary">Book a Repair</button>
            <button className="btn-secondary">Get Estimate</button>
          </div>
        </div>
      </section>

      {/* About / Stats + Our Story */}
      <section id="about" className="about-section">
        {/* Stats Row */}
        <div className="stats-wrap">
          <div className="stat-item">
            <FaTools className="stat-icon" />
            <h2 className="stat-number">10</h2>
            <p className="stat-caption">Years keeping homes and businesses cool</p>
          </div>
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <h2 className="stat-number">1,500+</h2>
            <p className="stat-caption">Satisfied customers across the region</p>
          </div>
          <div className="stat-item">
            <FaStar className="stat-icon" />
            <h2 className="stat-number">4.9</h2>
            <p className="stat-caption">Average service rating on Google and Yelp</p>
          </div>
          <div className="stat-item">
            <FaClock className="stat-icon" />
            <h2 className="stat-number">30</h2>
            <p className="stat-caption">Min response time in peak summer season</p>
          </div>
        </div>

        {/* Our Story */}
        <div className="our-story">
          <div className="story-text">
            <h2 className="story-title">Our Story</h2>
            <p>
              What started as a small family-owned service has grown into one of the
              most trusted plumbing companies in the region. From fixing leaky faucets
              to handling major installations, our mission has always been the same:
              deliver fast, reliable, and stress-free plumbing solutions.
            </p>
            <p>
              Every call we take is backed by a commitment to honesty, fair pricing,
              and customer-first service. That’s why thousands of homes and businesses
              continue to count on us year after year.
            </p>
          </div>

          <div className="story-image">
            {/* Slideshow */}
            <div className="story-slides">
              {[WaterPump, Pipe, Compression].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Story ${i}`}
                  className={`slide ${i === currentStory ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="services-header">
          <h2>Our Plumbing Services</h2>
          <p>Comprehensive solutions for all your plumbing needs.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#e6f0fa' }}>
              <FaTools style={{ color: '#0077ff' }} />
            </div>
            <h3>Leak Detection & Repair</h3>
            <p>Expert detection and repair of leaks to prevent water damage.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#e6f0fa' }}>
              <FaTools style={{ color: '#0077ff' }} />
            </div>
            <h3>Pipe Installation & Replacement</h3>
            <p>Professional installation and replacement of all pipe types.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#e6f0fa' }}>
              <FaTools style={{ color: '#0077ff' }} />
            </div>
            <h3>Drain Cleaning</h3>
            <p>Efficient clearing of clogged drains for smooth water flow.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#e6f0fa' }}>
              <FaTools style={{ color: '#0077ff' }} />
            </div>
            <h3>Water Heater Services</h3>
            <p>Installation, repair, and maintenance of water heaters.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#e6f0fa' }}>
              <FaTools style={{ color: '#0077ff' }} />
            </div>
            <h3>Fixture Installation</h3>
            <p>Expert installation of sinks, toilets, and other fixtures.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#e6f0fa' }}>
              <FaTools style={{ color: '#0077ff' }} />
            </div>
            <h3>Emergency Plumbing</h3>
            <p>24/7 emergency services for urgent plumbing issues.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#e6f0fa' }}>
              <FaTools style={{ color: '#0077ff' }} />
            </div>
            <h3>Sewer Line Repair</h3>
            <p>Advanced solutions for sewer line issues and blockages.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#e6f0fa' }}>
              <FaTools style={{ color: '#0077ff' }} />
            </div>
            <h3>Backflow Prevention</h3>
            <p>Installation and testing of backflow prevention systems.</p>
          </div>
        </div>
        <div className="customer-reviews">
          <h2>What Our Customers Say</h2>
          <p>Customer reviews in the spotlight</p>
          <div className="reviews-grid">
            <div className="review-card">
              <img src={Peter} alt="Peter K." className="review-image" />
              <div className="review-content">
                <div className="stars">★★★★★</div>
                <p><strong>Peter K.</strong><br />"Fantastic work! The team at PlumbFix quickly repaired my roof while providing great customer service. Highly recommended!"</p>
              </div>
            </div>
            <div className="review-card">
              <img src={Paul} alt="Paul D." className="review-image" />
              <div className="review-content">
                <div className="stars">★★★★☆</div>
                <p><strong>Paul D.</strong><br />"The team at PlumbFix quickly repaired my roof while providing great customer service. Highly recommended!"</p>
              </div>
            </div>
            <div className="review-card">
              <img src={Sarah} alt="Sarah R." className="review-image" />
              <div className="review-content">
                <div className="stars">★★★★★</div>
                <p><strong>Sarah R.</strong><br />"Fantastic work! The team at PlumbFix quickly repaired my roof while providing great customer service. Highly recommended!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div>
          <h2>Contact Us</h2>
          <p>Email: support@plumbfix.com &nbsp;|&nbsp; Phone: +123 456 7890</p>
        </div>
      </section>
    </>
  );
};

export default Home;