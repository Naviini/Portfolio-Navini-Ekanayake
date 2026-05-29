import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="logo">
            N<span>E</span>
          </a>
          <p>&copy; {new Date().getFullYear()} Navini Ekanayake</p>
          <p className="footer-tagline">Built with React · Open to opportunities</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/navini-ekanayake-3a10b92a8/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Naviini" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:naviniekanayake1@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}
