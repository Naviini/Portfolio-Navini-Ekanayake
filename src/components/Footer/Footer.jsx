import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="logo">
            N<span>E</span>
          </a>
          <p>&copy; {new Date().getFullYear()} Navini Ekanayake. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/navini-ekanayake-702854250/" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/Naviini" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:naviniekanayake4@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}
