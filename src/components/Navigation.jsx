
import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adam-khabisa-4a9677279/', icon: '💼' },
    { name: 'GitHub', href: 'https://github.com/methan6427', icon: '💻' },
    { name: 'Facebook', href: 'https://www.facebook.com/adam.khabisa.64', icon: '📘' },
    { name: 'Instagram', href: 'https://www.instagram.com/methan6427/', icon: '📷' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              className="social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </div>

        <div className="nav-logo">
          <h2>Adam Khabisa</h2>
        </div>

        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
