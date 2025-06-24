
import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Palette, Database, Monitor } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern React-based e-commerce platform with cart functionality, user authentication, and payment integration.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      image: "https://via.placeholder.com/400x250/1e293b/00ffff?text=E-Commerce",
      category: "Web Development"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      image: "https://via.placeholder.com/400x250/1e293b/00ffff?text=Task+Manager",
      category: "Web Development"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with smooth animations and responsive design.",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      image: "https://via.placeholder.com/400x250/1e293b/00ffff?text=Portfolio",
      category: "UI/UX Design"
    }
  ];

  const filters = ['All', 'Web Development', 'Desktop Development', 'UI/UX Design'];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Development': return Code2;
      case 'UI/UX Design': return Palette;
      case 'Desktop Development': return Monitor;
      default: return Code2;
    }
  };

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Here are some of my recent projects that showcase my skills and passion for development</p>
        </div>

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              <Code2 size={16} />
              <span>{filter}</span>
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
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
