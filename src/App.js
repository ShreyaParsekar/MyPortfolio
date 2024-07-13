import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <section className="snap-section">
        <Navbar/>
        <Hero/>
      </section>
      <section className="snap-section"><Parallax type="skills" /></section>
      <section className="snap-section"><Skills/></section>
      <section className="snap-section"><Parallax type="projects" /></section>
      <Portfolio/>
      {/* <section className="snap-section">Contact</section> */}
    </div>
  );
}

export default App;
