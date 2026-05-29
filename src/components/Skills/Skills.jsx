import React from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaGitAlt, FaDatabase, FaFigma, FaServer, FaJava,
} from 'react-icons/fa';
import {
  SiTypescript, SiPython, SiMongodb, SiTailwindcss, SiFlutter, SiFirebase,
  SiThreedotjs, SiLaravel, SiDart, SiMysql, SiCplusplus, SiC, SiTensorflow,
  SiExpress, SiVite, SiPostman, SiJira, SiOpenai, SiPhp, SiSupabase, SiExpo,
} from 'react-icons/si';
import useReveal from '../../hooks/useReveal';
import './Skills.css';

const signatureSkills = [
  { name: 'React', icon: <FaReact />, tag: 'Frontend', color: '#61dafb' },
  { name: 'Flutter', icon: <SiFlutter />, tag: 'Mobile', color: '#54C5F8' },
  { name: 'Three.js', icon: <SiThreedotjs />, tag: '3D Web', color: '#ffffff' },
  { name: 'Node.js', icon: <FaNodeJs />, tag: 'Backend', color: '#68a063' },
  { name: 'Firebase', icon: <SiFirebase />, tag: 'Cloud', color: '#FFCA28' },
  { name: 'AI / ML', icon: <SiTensorflow />, tag: 'Emerging', color: '#FF6F00' },
];

const skillCategories = [
  {
    title: 'Frontend & Mobile',
    accent: '#7c3aed',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Expo', icon: <SiExpo /> },
      { name: 'Dart', icon: <SiDart /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
    ],
  },
  {
    title: 'Backend & Data',
    accent: '#06b6d4',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'PHP', icon: <SiPhp /> },
      { name: 'Laravel', icon: <SiLaravel /> },
      { name: 'Supabase', icon: <SiSupabase /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'REST APIs', icon: <FaServer /> },
    ],
  },
  {
    title: 'AI, 3D & Systems',
    accent: '#f472b6',
    skills: [
      { name: 'Three.js', icon: <SiThreedotjs /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'OpenAI', icon: <SiOpenai /> },
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'AI / ML', icon: <SiTensorflow /> },
    ],
  },
  {
    title: 'Tools & Workflow',
    accent: '#10b981',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Jira', icon: <SiJira /> },
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
];

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section className="section skills-section" id="skills">
      <div className="skills-glow" aria-hidden="true" />

      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <span className="section-tag">Toolkit</span>
          <h2>Technologies that power my builds</h2>
          <div className="divider" />
          <p>
            From 3D web experiences and AI-driven apps to full-stack platforms and mobile apps,
            here's the stacks I bring.
          </p>
        </div>

        <div className={`skills-spotlight reveal ${visible ? 'visible' : ''}`}>
          <div className="spotlight-label">
            <span className="spotlight-dot" />
            Signature Stack
          </div>
          <div className="spotlight-grid">
            {signatureSkills.map((skill, i) => (
              <div
                className={`spotlight-card reveal-stagger ${visible ? 'visible' : ''}`}
                key={skill.name}
                style={{
                  '--skill-color': skill.color,
                  '--stagger-delay': `${0.1 + i * 0.07}s`,
                }}
              >
                <span className="spotlight-icon">{skill.icon}</span>
                <div className="spotlight-info">
                  <span className="spotlight-name">{skill.name}</span>
                  <span className="spotlight-tag">{skill.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, catIndex) => (
            <div
              className={`skill-category reveal-stagger ${visible ? 'visible' : ''}`}
              key={cat.title}
              style={{
                '--cat-accent': cat.accent,
                '--stagger-delay': `${0.2 + catIndex * 0.1}s`,
              }}
            >
              <h3>{cat.title}</h3>
              <div className="skill-pills">
                {cat.skills.map((skill, skillIndex) => (
                  <div
                    className={`skill-pill reveal-stagger ${visible ? 'visible' : ''}`}
                    key={skill.name}
                    style={{ '--stagger-delay': `${0.35 + catIndex * 0.08 + skillIndex * 0.04}s` }}
                  >
                    <span className="skill-pill-icon">{skill.icon}</span>
                    <span className="skill-pill-name">{skill.name}</span>
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
