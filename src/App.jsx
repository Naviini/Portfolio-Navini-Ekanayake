import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TechMarquee from './components/TechMarquee/TechMarquee';
import WhyHireMe from './components/WhyHireMe/WhyHireMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import References from './components/References/References';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechMarquee />
      <WhyHireMe />
      <Skills />
      <Projects />
      <Experience />
      <References />
      <Contact />
      <Footer />
    </>
  );
}
