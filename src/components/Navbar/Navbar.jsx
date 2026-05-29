import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import useActiveSection from '../../hooks/useActiveSection';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Why Me', href: '#why-me', id: 'why-me' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const SECTION_IDS = navLinks.map((link) => link.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="logo">
          N<span>E</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ label, href, id }) => (
            <li key={href}>
              <a
                href={href}
                className={activeId === id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a href="#contact" className="btn btn-primary btn-nav" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>

        <a href="#contact" className="btn btn-primary btn-nav nav-cta-desktop">
          Hire Me
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
}
