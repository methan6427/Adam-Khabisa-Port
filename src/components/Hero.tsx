import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
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
           src="/prjPics/PFP.jpg" 
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
