
import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Navigation } from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
