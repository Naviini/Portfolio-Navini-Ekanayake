import React, { useState, useEffect } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const roles = [
  'Software Engineering Undergraduate',
  'Full-Stack Developer',
  'Mobile App Developer',
  'AI & ML Enthusiast',
  'Kali Linux Lerner | Cybersecurity Enthusiast',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="about">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid-lines" />
      </div>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge hero-enter" style={{ '--enter-delay': '0.1s' }}>
            <span className="pulse-dot" />
            Open to Internships · 2026
          </div>

          <p className="hero-greeting hero-enter" style={{ '--enter-delay': '0.2s' }}>Hey, I'm</p>
          <h1 className="hero-name hero-enter" style={{ '--enter-delay': '0.35s' }}>
            Navini <span className="gradient-text shimmer-text">Ekanayake</span>
          </h1>
          <h2 className="hero-title hero-enter" style={{ '--enter-delay': '0.5s' }}>
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </h2>

          <p className="hero-bio hero-enter" style={{ '--enter-delay': '0.65s' }}>
            Final-year Software Engineering Undergraduate at the University of Plymouth.
            I build mobile apps, 3D web experiences, full-stack platforms, AI & ML models, and Linux Enthusiast.
            I'm looking for an internship where I can grow fast and deliver real impact.
          </p>

          <div className="hero-cta hero-enter" style={{ '--enter-delay': '0.8s' }}>
            <a href="#contact" className="btn btn-primary">
              Let's Work Together
            </a>
            <a href="#projects" className="btn btn-outline">
              See My Work
            </a>
          </div>

          <div className="hero-socials hero-enter" style={{ '--enter-delay': '0.95s' }}>
            <a href="https://www.linkedin.com/in/navini-ekanayake-3a10b92a8/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Naviini" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:naviniekanayake1@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual hero-enter" style={{ '--enter-delay': '0.45s' }}>
          <div className="hero-card-stack">
            <div className="hero-card hero-card-back">
              <code>const build = () =&gt; impact;</code>
            </div>
            <div className="hero-card hero-card-mid">
              <span className="card-label">Latest Stack</span>
              <div className="card-tags">
                <span>React</span><span>Flutter</span><span>Node</span>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-placeholder">
                <span>NE</span>
              </div>
              <div className="hero-ring" />
              <div className="hero-ring hero-ring-2" />
            </div>
          </div>
        </div>
      </div>

      <a href="#why-me" className="scroll-indicator" aria-label="Scroll down">
        <FiArrowDown />
      </a>
    </section>
  );
}
