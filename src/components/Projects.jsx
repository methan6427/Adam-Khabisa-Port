
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured online store built with React.js featuring product catalog, shopping cart, and user authentication.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce+Project"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing daily tasks and projects with drag-and-drop functionality.",
      technologies: ["React", "JavaScript", "Local Storage"],
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+Manager"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts for multiple cities.",
      technologies: ["React", "API Integration", "CSS"],
      image: "https://via.placeholder.com/400x250/ff6b6b/ffffff?text=Weather+App"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <button className="btn">View Project</button>
                  <button className="btn btn-outline">Source Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
