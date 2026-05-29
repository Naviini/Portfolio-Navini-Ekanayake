import React, { useRef } from 'react';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import useTilt from '../../hooks/useTilt';
import './Projects.css';

export default function ProjectCard({ project, index, visible }) {
  const cardRef = useRef(null);
  useTilt(cardRef);

  return (
    <article
      ref={cardRef}
      className={`project-card tilt-card ${project.featured ? 'featured' : ''} reveal-stagger ${visible ? 'visible' : ''}`}
      style={{
        '--project-gradient': project.gradient,
        '--stagger-delay': `${0.08 + index * 0.1}s`,
      }}
    >
      <div className="project-visual">
        <div className="project-glow" />
        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        {project.featured && (
          <span className="project-featured-badge">
            <FiStar /> Featured
          </span>
        )}
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.liveUrl !== '#' && (
            <a href={project.liveUrl} className="project-link" target="_blank" rel="noreferrer">
              <FiExternalLink /> Live Demo
            </a>
          )}
          <a href={project.repoUrl} className="project-link primary" target="_blank" rel="noreferrer">
            <FiGithub /> View Code
          </a>
        </div>
      </div>
    </article>
  );
}
