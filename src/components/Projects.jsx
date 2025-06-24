import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Palette, Database, Monitor } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Compressing using Huffman",
      description: "A React-based application that demonstrates Huffman encoding for data compression.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "/prjPics/huffman.png",  // Updated path
      github: "https://github.com/methan6427/Compressing-using-Huffman",
      live: "https://methan6427.github.io/Compressing-using-Huffman/",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Dynamic Programming Project",
      description: "A React project showcasing dynamic programming techniques and algorithms.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "/prjPics/dynamic.png",  // Updated path
      github: "https://github.com/methan6427/Dynamic-Programming",
      live: "https://methan6427.github.io/Dynamic-Programming/",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Portfolio Homepage",
      description: "A personal portfolio homepage designed with HTML and SCSS, showcasing professional design skills.",
      technologies: ["HTML", "SCSS"],
      image: "/prjPics/porfolio.png",  // Updated path
      github: "https://github.com/methan6427/portfolio-homepage",
      live: "https://methan6427.github.io/portfolio-homepage/",
      category: "UI/UX Design"
    },
    {
      id: 4,
      title: "Business Landing Page",
      description: "A responsive landing page for a business, created using HTML and CSS.",
      technologies: ["HTML", "CSS"],
      image: "/prjPics/bussiness landing.png",  // Updated path
      github: "https://github.com/methan6427/bussiness-landing",
      live: "https://methan6427.github.io/bussiness-landing/",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Store Simple Website",
      description: "A simple store website built with HTML, CSS, and JavaScript for basic e-commerce functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/prjPics/simpleStore.png",  // Updated path
      github: "https://github.com/methan6427/Store-Simple-Website",
      live: "https://methan6427.github.io/Store-Simple-Website/",
      category: "Web Development"
    },
    {
      id: 6,
      title: "Dental Clinic Management System",
      description: "A Java desktop application with JavaFX and MySQL for managing dental clinic operations.",
      technologies: ["Java", "JavaFX", "MySQL"],
      image: "/prjPics/dental.png",  // Updated path
      github: "#",
      live: "#",
      category: "Desktop Development"
    },
    {
      id: 7,
      title: "Movies Management System",
      description: "A Java desktop application using JavaFX for managing movie databases.",
      technologies: ["Java", "JavaFX"],
      image: "/prjPics/movie.png",  // Updated path
      github: "https://github.com/methan6427/Movies-Managment-System",
      live: "https://github.com/methan6427/Movies-Managment-System",
      category: "Desktop Development"
    },
    {
      id: 8,
      title: "Flight Management System",
      description: "A JavaFX-based desktop application for managing flight details and bookings.",
      technologies: ["Java", "JavaFX"],
      image: "/prjPics/flight.jpg",  // Updated path
      github: "https://github.com/methan6427/Flight-management-system",
      live: "https://github.com/methan6427/Flight-management-system",
      category: "Desktop Development"
    },
    {
      id: 9,
      title: "Python Projects",
      description: "A collection of small Python projects developed during a Udacity Nanodegree program.",
      technologies: ["Python"],
      image: "/prjPics/python.jpg",  // Updated path
      github: "https://github.com/methan6427/Python-projects",
      live: "https://github.com/methan6427/Python-projects",
      category: "Programming"
    },
    {
      id: 10,
      title: "DataStructure College",
      description: "A compilation of data structure projects and assignments completed for college.",
      technologies: ["Java", "C++"],
      image: "/prjPics/dsa.png",  // Updated path
      github: "https://github.com/methan6427/DataStructure-College",
      live: "https://github.com/methan6427/DataStructure-College",
      category: "Programming"
    },
    {
      id: 11,
      title: "Dijkstra-USA-React",
      description: "Find the shortest path between 2 vertices in USA using Dijkstra's algorithm.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "/prjPics/Dijkstra.png",  // Updated path
      github: "https://github.com/methan6427/Dijkstra-USA-React",
      live: "https://methan6427.github.io/Dijkstra-USA-React/",
      category: "Web Development"
    }
  ];

  const filters = ['All', 'Web Development', 'Desktop Development', 'UI/UX Design', 'Programming'];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Development': return Code2;
      case 'UI/UX Design': return Palette;
      case 'Desktop Development': return Monitor;
      case 'Programming': return Database;
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
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="modern-btn primary">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="modern-btn secondary">
                      <Github size={18} />
                      <span>Source Code</span>
                    </a>
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
