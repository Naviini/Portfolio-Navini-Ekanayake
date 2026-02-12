import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './References.css';

const references = [
  
  {
    name: 'Mohomed Shafraz(Ph.D.)',
    title: 'Department of Software Engineering/Senior',
    company: 'NSBM Green University',
    relationship: 'Lecturer',
    email: 'shafraz@nsbm.ac.lk',
    
  },
  {
    name: 'Ruwan Jayasekara',
    title: 'Managing Director',
    company: 'RJ Enterprises',
    relationship: 'Freelance Client',
    email: 'ruwan@rjenterprises.lk',
    
  },
];

export default function References() {
  return (
    <section className="section bg-alt" id="references">
      <div className="container">
        <div className="section-header">
          <h2>Professional References</h2>
          <div className="divider" />
          <p>Academics and professionals who can vouch for my skills and character.</p>
        </div>

        <div className="references-grid">
          {references.map((ref, i) => (
            <div className="reference-card" key={i}>
              <div className="reference-avatar">{ref.name.charAt(0)}</div>
              <h3>{ref.name}</h3>
              <p className="reference-title">{ref.title}</p>
              <p className="reference-company">{ref.company}</p>
              <span className="reference-relationship">{ref.relationship}</span>
              <div className="reference-contact">
                <a href={`mailto:${ref.email}`} title="Email">
                  <FaEnvelope /> {ref.email}
                </a>
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
