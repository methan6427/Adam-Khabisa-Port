
import React from 'react';
import { Github, ExternalLink, Code2, Palette, Database } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured online store built with React.js featuring product catalog, shopping cart, and user authentication.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce+Project",
      category: "Frontend"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing daily tasks and projects with drag-and-drop functionality.",
      technologies: ["React", "JavaScript", "Local Storage"],
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+Manager",
      category: "Full Stack"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts for multiple cities.",
      technologies: ["React", "API Integration", "CSS"],
      image: "https://via.placeholder.com/400x250/ff6b6b/ffffff?text=Weather+App",
      category: "Frontend"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend': return Palette;
      case 'Full Stack': return Code2;
      case 'Backend': return Database;
      default: return Code2;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Showcasing my latest work and creative solutions</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-category">
                    <CategoryIcon size={16} />
                    <span>{project.category}</span>
                  </div>
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
                  
                  <div className="project-actions">
                    <button className="modern-btn primary">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </button>
                    <button className="modern-btn secondary">
                      <Github size={18} />
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
