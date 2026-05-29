import React from 'react';
import useReveal from '../../hooks/useReveal';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projects = [
  {
    title: 'Luna Music Sequencer',
    description:
      'A Flutter music sequencer for creating beats with multi-instrument tracks and MIDI support — my most polished mobile app.',
    tags: ['Dart', 'Flutter', 'Firebase', 'C++'],
    gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    featured: true,
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini/Luna_music',
  },
  {
    title: 'ND Store — 3D Space Designer',
    description:
      'Interactive 2D/3D room planner with Three.js, GLTF models, auth, and MongoDB — built for a real HCI group project.',
    tags: ['React', 'Three.js', 'MongoDB', 'Node.js'],
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    featured: true,
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini/HCI_furniture-store_Group_2',
  },
  {
    title: 'BREATH — Air Quality App',
    description:
      'Real-time AQI dashboard with location-based monitoring, trend charts, and interactive data visualizations.',
    tags: ['PHP', 'Laravel', 'MySQL'],
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini/Breath_TheAirQualityApp',
  },
  {
    title: 'Project Master',
    description:
      'Full-stack project management platform for teams to plan sprints, track tasks, and collaborate in one place.',
    tags: ['React', 'MongoDB', 'Node.js', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini/Full_Stack_Dev_G86',
  },
  {
    title: 'Evolve — AI Body Architect',
    description:
      'AI-driven platform for body metric analysis and structural visualization, built with Flutter and Firebase.',
    tags: ['Dart', 'Flutter', 'Firebase'],
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini',
  },
];

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section className="section bg-alt" id="projects">
      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <span className="section-tag">Portfolio</span>
          <h2>Projects that prove I can ship</h2>
          <div className="divider" />
          <p>Real apps I've built — from mobile sequencers to 3D web experiences. Each one taught me something new.</p>
        </div>

        <div className="projects-bento">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
