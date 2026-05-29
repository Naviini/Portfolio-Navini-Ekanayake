import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import useReveal from '../../hooks/useReveal';
import './Experience.css';

const experiences = [
  {
    role: 'BSc (Hons) Software Engineering',
    company: 'University of Plymouth',
    period: '2023 – Present',
    description:
      'Currently in Final year. Studying advanced modules in AI & ML, software architecture, web & mobile development, and agile methodologies. Maintaining strong academic performance.',
    highlights: ['Software Design', 'Web Development', 'Agile', 'Databases', 'AI & ML'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: '2025 – Present',
    description:
      'Took on freelance projects building landing pages and web & mobile applications for local businesses and fellow students, sharpening real-world development skills.',
    highlights: ['React', 'Flutter', 'Responsive Design', 'Client Communication'],
  },
  {
    role: 'Group Project Lead',
    company: 'NSBM Green University',
    period: '2023 – 2026',
    description: (
      <>
        In my university life I led significant amount of various group projects.
        <br />
        Led 5 to 10 member teams. Managed task allocation, code reviews, and sprint planning.
      </>
    ),
    highlights: ['Team Leadership', 'Scrum', 'Code Review', 'Jira', 'MS Projects'],
  },
  {
    role: 'Volunteer – IT Support',
    company: 'University IT Society',
    period: '2024 – 2025',
    description:
      'Assisted peers and lecturers with technical troubleshooting, organized coding workshops, and participated in inter-university hackathons.',
    highlights: ['Troubleshooting', 'Workshops', 'Hackathons'],
  },
];

function TimelineItem({ exp, index }) {
  const [ref, visible] = useReveal(0.2);

  return (
    <div
      ref={ref}
      className={`timeline-item reveal-stagger ${visible ? 'visible' : ''}`}
      style={{ '--stagger-delay': `${index * 0.15}s` }}
    >
      <div className="timeline-marker">
        <FiBriefcase />
      </div>
      <div className="timeline-card">
        <span className="timeline-period">{exp.period}</span>
        <h3>{exp.role}</h3>
        <h4>{exp.company}</h4>
        <p>{exp.description}</p>
        <div className="timeline-tags">
          {exp.highlights.map((h) => (
            <span className="tag" key={h}>{h}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section className="section bg-alt" id="experience">
      <div className="container">
        <div className={`section-header reveal ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
          <span className="section-tag">Journey</span>
          <h2>Education &amp; Experience</h2>
          <div className="divider" />
          <p>Where I've been — and what I've learned along the way.</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.role} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
