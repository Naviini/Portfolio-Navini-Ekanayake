import React from 'react';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    role: 'BSc (Hons) Software Engineering',
    company: 'University of Plymouth | NSBM Green University',
    period: '2023 – Present',
    description:
      'Currently in Final year. Studying advanced modules in AI & ML, software architecture, web development, databases, and agile methodologies. Maintaining strong academic performance.',
    highlights: ['Software Design', 'Web Development', 'Agile', 'Databases', 'AI & ML'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: '2024 – Present',
    description:
      'Took on small freelance projects building landing pages and simple web applications for local businesses and fellow students, sharpening real-world development skills.',
    highlights: ['React', 'Responsive Design', 'Client Communication'],
  },
  {
    role: 'Group Project Lead',
    company: 'NSBM Green University',
    period: '2024 – 2025',
    description:
      'Led a 5-member team to develop a Student Management System as part of a module assignment. Managed task allocation, code reviews, and sprint planning using Jira.',
    highlights: ['Team Leadership', 'Scrum', 'Code Review', 'Jira'],
  },
  {
    role: 'Volunteer – IT Support',
    company: 'University IT Society',
    period: '2023 – 2024',
    description:
      'Assisted peers and lecturers with technical troubleshooting, organized coding workshops, and participated in inter-university hackathons.',
    highlights: ['Troubleshooting', 'Workshops', 'Hackathons'],
  },
];

export default function Experience() {
  return (
    <section className="section bg-alt" id="experience">
      <div className="container">
        <div className="section-header">
          <h2>Education &amp; Experience</h2>
          <div className="divider" />
          <p>My academic journey and experiences that shaped my skills.</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
