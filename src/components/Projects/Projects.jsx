import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'Luna music Sequencer app',
    description:
      'Luna is a Flutter music sequencer app for creating, editing, and playing beats with multiple instruments and MIDI support.',
    tags: ['C++','Dart', 'Firebase'],
    image: null,
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini/Luna_music',
  },
  {
    title: 'Evolve: AI Body Architect',
    description:
      'Architected an AI-driven platform focused on body metric analysis and structural visualization.',
    tags: ['Dart', 'Flutter', 'Firebase'],
    image: null,
    liveUrl: '#',
    repoUrl: '#https://github.com/Naviini',
  },
  {
    title: 'BREATH: The Air Quality AQI App',
    description:
      'Web-based AQI dashboard displaying real-time air quality data, trends, and visualizations, with interactive charts and location-based monitoring for users.',
    tags: ['PHP', 'Laravel', 'MySQL', 'HTML/CSS'],
    image: null,
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini/Breath_TheAirQualityApp',
  },
  {
    title: 'Project Master: Project Management system',
    description:
      'A project management website that helps teams plan, track, and manage tasks, deadlines, and collaboration efficiently in one platform.',
    tags: ['React', 'MongoDB', 'Tailwind CSS', 'Node.js'],
    image: null,
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini/Full_Stack_Dev_G86',
  },
  {
    title: 'ND store: 3D Space designer',
    description:
      'Web-based 2D/3D Space designer application with React.js and Three.js, enabling room layouts, GLTF models, secure login, and MongoDB storage.',
    tags: ['React', 'MongoDB', 'Three.js', 'Node.js'],
    image: null,
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini/HCI_furniture-store_Group_2',
  },

];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="divider" />
          <p>Academic and personal projects that demonstrate my technical abilities.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
                <div className="project-overlay">
                  <a href={project.liveUrl} className="btn btn-accent btn-sm" target="_blank" rel="noreferrer">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={project.repoUrl} className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                    <FiGithub /> Code
                  </a>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
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
