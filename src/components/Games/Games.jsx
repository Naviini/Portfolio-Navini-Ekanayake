import React from 'react';
import useReveal from '../../hooks/useReveal';
import GameCard from './GameCard';
import './Games.css';

const gameProjects = [
  {
    title: 'Luna Music Sequencer',
    icon: '🎵',
    type: 'Interactive Audio',
    devRole: 'Gameplay & Systems Design',
    description:
      'A rhythm-focused music app where players compose beats in real time — blending creative tooling with responsive, game-like interaction loops.',
    highlights: [
      'Multi-instrument sequencing with instant feedback',
      'MIDI support for hardware integration',
      'Touch-first UI tuned for creative flow',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'C++'],
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
    spotlight: true,
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini/Luna_music',
  },
  {
    title: 'ND Store — 3D Space Designer',
    icon: '🎮',
    type: '3D Interactive Experience',
    devRole: 'Real-Time 3D · Web',
    description:
      'An immersive room designer with camera controls, GLTF model loading, and spatial interaction — the same foundations used in 3D games and virtual worlds.',
    highlights: [
      'Three.js scene with draggable 3D furniture',
      'GLTF asset pipeline & spatial layout tools',
      'Auth + persistent saves via MongoDB',
    ],
    tags: ['Three.js', 'React', 'MongoDB', 'Node.js'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #1e3a5f 100%)',
    spotlight: true,
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini/HCI_furniture-store_Group_2',
  },
  {
    title: 'Evolve — AI Body Architect',
    icon: '🧬',
    type: 'Interactive Simulation',
    devRole: 'Mobile · AI-Driven UX',
    description:
      'A body-metric visualization platform with dynamic feedback and structural analysis — interactive systems design applied to health tech.',
    highlights: [
      'AI-driven metric analysis & visualization',
      'Real-time structural body mapping',
      'Firebase-backed user data flow',
    ],
    tags: ['Flutter', 'Firebase', 'Dart'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
    liveUrl: '#',
    repoUrl: 'https://github.com/Naviini',
  },
];

export default function Games() {
  const [ref, visible] = useReveal();

  return (
    <section className="section games-section" id="games">
      <div className="games-bg" aria-hidden="true" />

      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <span className="section-tag">Games & Interactive</span>
          <h2>Where code meets creativity</h2>
          <div className="divider" />
          <p>
            Interactive experiences built with game-dev thinking — real-time feedback,
            3D worlds, and systems players (or users) actually feel.
          </p>
        </div>

        <div className={`game-philosophy reveal ${visible ? 'visible' : ''}`}>
          <span className="philosophy-label">Design philosophy</span>
          <p>
            I care about <strong>feel</strong>, <strong>feedback</strong>, and{' '}
            <strong>player-first mechanics</strong> — whether it's a music sequencer,
            a 3D room, or a mobile simulation.
          </p>
        </div>

        <div className="games-grid">
          {gameProjects.map((project, i) => (
            <GameCard key={project.title} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
