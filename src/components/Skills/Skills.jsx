import React from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaGitAlt, FaDatabase, FaFigma
} from 'react-icons/fa';
import {
  SiTypescript, SiPython, SiMongodb, SiTailwindcss
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, level: 85 },
      { name: 'JavaScript', icon: <FaJsSquare />, level: 80 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
      { name: 'Tailwind', icon: <SiTailwindcss />, level: 80 },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 70 },
      { name: 'Python', icon: <SiPython />, level: 65 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 60 },
      { name: 'SQL', icon: <FaDatabase />, level: 70 },
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 75 },
      { name: 'Figma', icon: <FaFigma />, level: 55 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section bg-alt" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills &amp; Expertise</h2>
          <div className="divider" />
          <p>Technologies and tools I've been learning and working with during my degree.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <h3>{cat.title}</h3>
              <div className="skill-items">
                {cat.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
