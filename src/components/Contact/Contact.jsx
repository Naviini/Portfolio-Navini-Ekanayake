import React, { useState } from 'react';
import { FiSend, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with email service (e.g., EmailJS, Formspree)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="divider" />
          <p>Interested in offering an internship or collaboration? Let's connect.</p>
        </div>

        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>
              I'm actively looking for internship opportunities in software
              engineering. Feel free to reach out if you'd like to connect!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FiMail />
                <div>
                  <strong>Email</strong>
                  <span>naviniekanayake1@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <FiPhone />
                <div>
                  <strong>Phone</strong>
                  <span>+94 77 376 2009</span>
                </div>
              </div>
              <div className="contact-item">
                <FiMapPin />
                <div>
                  <strong>Location</strong>
                  <span>528/12,Stage 2, Anuradhapura Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <FiSend /> Send Message
            </button>

            {submitted && (
              <p className="form-success">Thank you! Your message has been sent.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
