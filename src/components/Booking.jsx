import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/booking.css"; // Assume a separate CSS or integrate into home.css

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

  const handleSuggestServices = async () => {
    if (!description) {
      alert("Please describe your problem.");
      return;
    }
    setLoading(true);
    try {
      // API call to backend for AI-based service suggestion
      const response = await fetch("/api/suggest-services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });
      const data = await response.json();
      setSuggestedServices(data.suggestedServices || []);
      if (data.suggestedServices.length === 0) {
        alert("No matching services found. Please provide more details.");
      }
    } catch (error) {
      alert("Error fetching suggestions. Please try again.");
    }
    setLoading(false);
  };

  const handleGetEstimate = async () => {
    if (suggestedServices.length === 0) {
      alert("Please get service suggestions first.");
      return;
    }
    setLoading(true);
    try {
      // API call to backend for estimate based on suggested services
      const response = await fetch("/api/get-estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ services: suggestedServices }),
      });
      const data = await response.json();
      setEstimate(data.estimate || null);
    } catch (error) {
      alert("Error fetching estimate. Please try again.");
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!appointmentDate || !appointmentTime || suggestedServices.length === 0) {
      alert("Please complete all fields, including service suggestions and date/time.");
      return;
    }
    setLoading(true);
    try {
      // API call to backend for booking appointment
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          description,
          services: suggestedServices,
          estimate,
          date: appointmentDate.toISOString(),
          time: appointmentTime,
        }),
      });
      const data = await response.json();
      alert(data.message || "Appointment booked successfully!");
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
    } catch (error) {
      alert("Error booking appointment. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="booking-page">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <label>
          Describe Your Problem (in any language):
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <button type="button" onClick={handleSuggestServices} disabled={loading}>
          {loading ? "Loading..." : "Suggest Services"}
        </button>
        {suggestedServices.length > 0 && (
          <div className="suggested-services">
            <h2>Suggested Services:</h2>
            <ul>
              {suggestedServices.map((service, i) => <li key={i}>{service}</li>)}
            </ul>
            <button type="button" onClick={handleGetEstimate} disabled={loading}>
              {loading ? "Loading..." : "Get Estimate"}
            </button>
            {estimate !== null && <p>Estimated Cost: ${estimate}</p>}
          </div>
        )}
        <label>
          Appointment Date:
          <DatePicker selected={appointmentDate} onChange={(date) => setAppointmentDate(date)} required />
        </label>
        <label>
          Appointment Time:
          <input type="time" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
};

export default Booking;