import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Facebook, Instagram, LucideIcon } from 'lucide-react';
import './Navigation.css';

interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adam-khabisa-4a9677279/', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/methan6427', icon: Github },
    { name: 'Facebook', href: 'https://www.facebook.com/adam.khabisa.64', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/methan6427/', icon: Instagram }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Adam Khabisa</h2>
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">
            <span>Home</span>
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            <span>About</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            <span>Projects</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            <span>Contact</span>
          </button>
        </div>

        <div className="social-icons">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a 
                key={index} 
                href={social.href} 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                title={social.name}
              >
                <IconComponent size={20} />
              </a>
            );
          })}
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
