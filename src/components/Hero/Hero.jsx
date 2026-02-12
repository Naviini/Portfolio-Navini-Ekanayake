import React from 'react';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container hero-grid">
        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Navini Ekanayake</h1>
          <h2 className="hero-title">Software Engineering Undergraduate</h2>
          <p className="hero-bio">
            3rd Year Software Engineering student at the 
            University of Plymouth, passionate about building clean,
            user-focused web and mobile applications. Currently seeking an
            internship to apply my skills in a real-world environment.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Hire Me as an Intern
            </a>
            <a href="#projects" className="btn btn-outline">
              View My Projects
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/navini-ekanayake-3a10b92a8/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Naviini" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="naviniekanayake4@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
              <span>NE</span>
            </div>
            <div className="hero-decoration" />
          </div>
        </div>
      </div>

      <a href="#skills" className="scroll-indicator" aria-label="Scroll down">
        <FiArrowDown />
      </a>
    </section>
  );
}
