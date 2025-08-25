import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { FaTools, FaUsers, FaStar, FaClock } from "react-icons/fa"; // React Icons

import PVC from "../assets/PVC.jpg";
import Drain from "../assets/Drain.jpg";
import PipeWrench from "../assets/PipeWrench.jpg";
import PipeThreader from "../assets/PipeThreader.jpg";
import PressureGauge from "../assets/PressureGauge.jpg";

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
      <img src={PipeWrench} alt="Our Story" />
    </div>
  </div>
</section>

      {/* Services */}
      <section id="services" className="section">
        <div>
          <h2>Our Services</h2>
          <p>We provide plumbing installation, repair, and maintenance.</p>
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
