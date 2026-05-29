import React from 'react';
import './TechMarquee.css';

const techs = [
  'React', 'Flutter', 'Three.js', 'Node.js', 'TensorFlow', 'Firebase',
  'Laravel', 'MongoDB', 'Dart', 'TypeScript', 'OpenAI', 'Vite',
];

export default function TechMarquee() {
  const items = [...techs, ...techs];

  return (
    <div className="tech-marquee" aria-hidden="true">
      <div className="tech-marquee-track">
        {items.map((tech, i) => (
          <span className="tech-marquee-item" key={`${tech}-${i}`}>
            {tech}
            <span className="tech-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
