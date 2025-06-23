
import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    'React.js',
    'JavaScript',
    'Java',
    'JavaFX',
    'HTML',
    'CSS'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
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
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
