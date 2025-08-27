import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom"; // For navigation
import "../styles/booking.css";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [suggestedServices, setSuggestedServices] = useState([]);
  const [estimate, setEstimate] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Details, 2: Services, 3: Date/Time, 4: Confirmation

  // Simulated services based on description
  const simulateSuggestServices = () => {
    if (!description) return [];
    const keywords = description.toLowerCase();
    const services = [
      "Leak Detection & Repair",
      "Pipe Installation & Replacement",
      "Drain Cleaning",
      "Water Heater Services",
      "Fixture Installation",
      "Emergency Plumbing",
      "Sewer Line Repair",
      "Backflow Prevention",
    ];
    return services.filter(service =>
      keywords.includes(service.toLowerCase().replace(/ & /g, " ")) ||
      keywords.includes(service.toLowerCase().split(" ")[0])
    );
  };

  // Simulated base estimate
  const simulateGetEstimate = () => {
    const basePrices = {
      "Leak Detection & Repair": 150,
      "Pipe Installation & Replacement": 300,
      "Drain Cleaning": 100,
      "Water Heater Services": 250,
      "Fixture Installation": 200,
      "Emergency Plumbing": 400,
      "Sewer Line Repair": 350,
      "Backflow Prevention": 180,
    };
    return suggestedServices.reduce((sum, service) => sum + (basePrices[service] || 0), 0);
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!name || !email || !phone || !address || !description) {
        alert("Please fill in all fields.");
        return;
      }
      const simServices = simulateSuggestServices();
      setSuggestedServices(simServices);
      if (simServices.length === 0) {
        alert("No services matched your description. Please provide more details.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setEstimate(simulateGetEstimate());
      setStep(3);
    } else if (step === 3) {
      if (!appointmentDate || !appointmentTime) {
        alert("Please select a date and time.");
        return;
      }
      setStep(4);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 4) {
      alert(`Appointment booked for ${name} on ${appointmentDate?.toDateString()} at ${appointmentTime}. Estimated Cost: $${estimate}`);
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setDescription("");
      setSuggestedServices([]);
      setEstimate(null);
      setAppointmentDate(null);
      setAppointmentTime("");
      setStep(1);
    }
  };

  return (
    <div className="booking-page">
      <h1>Book Your Plumbing Service</h1>
      <div className="progress-bar">
        <div className={`step ${step >= 1 ? "active" : ""}`}>1. Details</div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>2. Services</div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>3. Date & Time</div>
        <div className={`step ${step >= 4 ? "active" : ""}`}>4. Confirmation</div>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        {step === 1 && (
          <>
            <label>
              Full Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Enter your phone number"
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                placeholder="Enter your address"
              />
            </label>
            <label>
              Describe Your Issue:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Describe your plumbing problem (any language)"
              />
            </label>
            <button
              type="button"
              onClick={handleNextStep}
              disabled={loading}
              className="next-button"
            >
              {loading ? "Loading..." : "Next Step"}
            </button>
          </>
        )}

        {step === 2 && suggestedServices.length > 0 && (
          <div className="services-step">
            <h2>Your Suggested Services</h2>
            <ul>
              {suggestedServices.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleNextStep}
              disabled={loading}
              className="next-button"
            >
              {loading ? "Loading..." : "Next Step"}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="back-button"
            >
              Back
            </button>
          </div>
        )}

        {step === 3 && (
          <>
            <label>
              Appointment Date:
              <DatePicker
                selected={appointmentDate}
                onChange={(date) => setAppointmentDate(date)}
                required
                minDate={new Date()}
                placeholderText="Select a date"
              />
            </label>
            <label>
              Appointment Time:
              <input
                type="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
                placeholder="Select a time"
              />
            </label>
            {estimate !== null && (
              <div className="estimate-section">
                <p className="estimate">Estimated Cost: ${estimate}</p>
                <Link to="/detailed-estimate" state={{ services: suggestedServices, description }}>
                  <button className="detailed-button">Get Detailed Cost</button>
                </Link>
              </div>
            )}
            <button
              type="button"
              onClick={handleNextStep}
              disabled={loading}
              className="next-button"
            >
              {loading ? "Loading..." : "Confirm Booking"}
            </button>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="back-button"
            >
              Back
            </button>
          </>
        )}

        {step === 4 && (
          <div className="confirmation-step">
            <h2>Booking Confirmed!</h2>
            <p>Thank you, {name}! Your appointment has been booked.</p>
            <p>Details: {appointmentDate?.toDateString()} at {appointmentTime}</p>
            {estimate !== null && (
              <div className="estimate-section">
                <p className="estimate">Estimated Cost: ${estimate}</p>
                <Link to="/detailed-estimate" state={{ services: suggestedServices, description }}>
                  <button className="detailed-button">Get Detailed Cost</button>
                </Link>
              </div>
            )}
            <p>Services: {suggestedServices.join(", ")}</p>
            <button
              type="submit"
              disabled={loading}
              className="next-button"
            >
              {loading ? "Loading..." : "Finish"}
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="back-button"
            >
              Back
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Booking;