
import React from 'react';
import { Code2, Palette, Database, Monitor, Globe, Smartphone } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React.js', icon: Code2 },
    { name: 'JavaScript', icon: Code2 },
    { name: 'Java', icon: Code2 },
    { name: 'JavaFX', icon: Monitor },
    { name: 'HTML', icon: Globe },
    { name: 'CSS', icon: Palette }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate about creating engaging digital experiences through code</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              As a 4th-year Computer Science student, I've developed a passion for frontend development 
              and creating user experiences that matter. My journey started with curiosity about how 
              websites work and evolved into a deep love for crafting beautiful, functional web applications.
            </p>
            <p>
              I specialize in React.js and modern web technologies, always staying up-to-date with 
              the latest trends and best practices in frontend development. I believe in writing 
              clean, maintainable code that not only works but tells a story.
            </p>
            
            <div className="learning-box">
              <h4>Currently Learning</h4>
              <p>
                Algorithms and intermediate React patterns to enhance my problem-solving skills 
                and deepen my understanding of modern frontend architecture.
              </p>
            </div>
          </div>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="skill-item">
                    <IconComponent size={20} />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
