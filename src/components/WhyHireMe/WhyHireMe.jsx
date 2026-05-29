import React from 'react';
import { FiCode, FiUsers, FiZap, FiAward } from 'react-icons/fi';
import useReveal from '../../hooks/useReveal';
import './WhyHireMe.css';

const reasons = [
  {
    icon: <FiCode />,
    title: 'Full-Stack Builder',
    text: 'From Flutter, React native + Expo mobile apps to React + Three.js web experiences, I ship end-to-end products.',
  },
  {
    icon: <FiUsers />,
    title: 'Team Player & Leader',
    text: 'Led a 5 to 10 members dev teams through sprints, code reviews, and real client deliverables using Agile & Jira.',
  },
  {
    icon: <FiZap />,
    title: 'Fast Learner',
    text: 'Picked up AI integration, 3D rendering, and Firebase in semester projects I adapt to whatever the role needs.',
  },
  {
    icon: <FiAward />,
    title: 'Proven Track Record',
    text: '10+ shipped projects, freelance clients, and academic references ready to vouch for my work ethic.',
  },
];

const stats = [
  { value: '10+', label: 'Projects Shipped' },
  { value: '3+', label: 'Years Coding' },
  { value: '20+', label: 'Technologies' },
  { value: '100%', label: 'Internship Ready' },
];

export default function WhyHireMe() {
  const [ref, visible] = useReveal();

  return (
    <section className="section why-hire" id="why-me">
      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <span className="section-tag">Why hire me?</span>
          <h2>I don't just learn code I build things people use</h2>
          <p>
            Recruiters see hundreds of identical portfolios. Here's what makes me
            someone worth bringing onto your team.
          </p>
        </div>

        <div className={`stats-row reveal ${visible ? 'visible' : ''}`}>
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={`reasons-grid reveal ${visible ? 'visible' : ''}`}>
          {reasons.map((item) => (
            <div className="reason-card" key={item.title}>
              <div className="reason-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
