import React, { useEffect, useState } from "react";
import "../styles/home.css";

/* Replace these with your actual images */
import PVC from "../assets/PVC.jpg";
import Drain from "../assets/Drain.jpg";
import PipeWrench from "../assets/PipeWrench.jpg";
import PipeThreader from "../assets/PipeThreader.jpg";
import PressureGauge from "../assets/PressureGauge.jpg";

const Home = () => {
  const heroImages = [PVC, Drain, PipeWrench,PipeThreader, PressureGauge];
  const [currentImage, setCurrentImage] = useState(0);

  /* Real cross-fade slideshow (every 5s) */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  /* Auto-scroll from Hero → About after 10s */
  useEffect(() => {
    const timer = setTimeout(() => {
      const about = document.getElementById("about");
      if (about) about.scrollIntoView({ behavior: "smooth" });
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">PlumbFix</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero */}
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

      {/* About — Stats like your screenshot */}
      <section id="about" className="stats-section">
        <div className="stats-wrap">
          <div className="stat-item">
            <h2 className="stat-number">10</h2>
            <p className="stat-caption">Years keeping homes and businesses cool</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">1,500+</h2>
            <p className="stat-caption">Satisfied customers across the region</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">4.9</h2>
            <p className="stat-caption">Average service rating on Google and Yelp</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">30</h2>
            <p className="stat-caption">Min response time in peak summer season</p>
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
