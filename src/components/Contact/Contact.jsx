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
    const body = encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`
    );
    window.location.href = `mailto:naviniekanayake1@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="section bg-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2>Ready to bring me on your team?</h2>
          <div className="divider" />
          <p>I'm actively seeking internship opportunities. Drop me a message.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Start a conversation</h3>
            <p>
              Whether you're hiring for an internship, have a freelance project,
              or just want to connect,   I'd love to hear from you.
         
            </p>

            {/* <div className="contact-highlight">
              <strong>🚀 Currently Available</strong>
              <p>Open for software engineering internships starting 2025. Remote or on-site.</p>
            </div> */}

            <div className="contact-details">
              <div className="contact-item">
                <FiMail />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:naviniekanayake1@gmail.com">naviniekanayake1@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FiPhone />
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+94773762009">+94 77 376 2009</a>
                </div>
              </div>
              <div className="contact-item">
                <FiMapPin />
                <div>
                  <strong>Location</strong>
                  <span>Anuradhapura, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

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
                placeholder="Internship Opportunity"
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
                placeholder="Tell me about the role or project..."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <FiSend /> Send Message
            </button>

            {submitted && (
              <p className="form-success">Opening your email client — thank you!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
