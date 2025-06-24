
import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-image float">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQENtvMLbvrSFA/profile-displayphoto-shrink_800_800/B4EZQUrGFGHgAg-/0/1735513630898?e=1756339200&v=beta&t=krsflQBwsmVhnW86J5DFEohDZqxYFRKh3njhGs5MSxE" 
            alt="Adam Khabisa"
          />
        </div>
        
        <h1 className="hero-title fade-in-up">
          Hi, I'm <span className="highlight">Adam Khabisa</span>
        </h1>
        
        <p className="hero-subtitle fade-in-up">
          4th-year Computer Science student specializing in <span className="highlight-text">frontend development</span> with React and modern web technologies
        </p>
        
        <div className="hero-buttons fade-in-up">
          <button onClick={() => scrollToSection('projects')} className="btn primary">
            View Portfolio
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn secondary">
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;
