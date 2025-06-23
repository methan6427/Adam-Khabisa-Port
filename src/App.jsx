
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
