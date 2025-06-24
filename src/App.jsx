
import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Navigation from './components/Navigation.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
