import React, { useState } from "react";
import Header from "../LandingPage/Header";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    message: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
        <Header/>
      <header className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have questions or feedback? Fill out the form below and we'll get back to you.</p>
      </header>

      <section className="contact-content">
        <div className="contact-banner">
          <h2>About Our Restaurant</h2>
          <p>
            Discover a seamless dining experience with ScanEat. Order, enjoy, and leave feedback to help us serve you better!
          </p>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            </div>
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <textarea name="feedback" placeholder="Your Feedback" value={formData.feedback} onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
          </form>

          {submitted && <div className="thank-you-message">Thank you for reaching out! We'll get back to you soon.</div>}
        </div>
      </section>

      <footer className="contact-footer">
        <p>&copy; 2025 SmartDine. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;