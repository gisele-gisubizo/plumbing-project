import React, { useEffect } from "react";
import "../styles/home.css";
import plumbingBg from "../assets/PVC.jpg"; // replace with your image path
import PlungerBg from "../assets/Plunger.jpg"; // Not used anymore

const Home = () => {
  // Auto scroll after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSection = document.getElementById("services");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 10000); // 10 seconds

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

      {/* Hero Section */}
      <div
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${plumbingBg})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Fast Plumbing Repair — When You Need It Most.</h1>
          <p>Same-day service. Certified plumbers. 100% satisfaction guarantee.</p>
          <div className="buttons">
            <button className="btn-primary">Book a Repair</button>
            <button className="btn-secondary">Get Estimate</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="about-section" /* Changed from 'hero' to 'about-section' */
      >
        <div className="hero-content">
          <h1 className="count-up">15</h1>
          <p className="years">Years of Expertise</p>
          <div className="rating">
            <h2 className="count-up">4.9</h2>
            <p>Average Rating from 5,000+ Reviews</p>
          </div>
          <p className="description">
            At PlumbFix, we’ve been delivering top-notch plumbing solutions for over a decade and a half. Trusted by thousands, our certified team ensures every job is done with precision and care.
          </p>
        </div>
      </div>

      {/* Placeholder Sections */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <p>We provide plumbing installation, repair, and maintenance.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: support@plumbfix.com | Phone: +123 456 7890</p>
      </section>
    </>
  );
};

export default Home;