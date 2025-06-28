import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Palette, Database, Monitor, Award, Calendar } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showCertificates, setShowCertificates] = useState(false); // Changed to boolean for checkbox

  const projects = [
    {
      id: 1,
      title: "Compressing using Huffman",
      description: "A React-based application that demonstrates Huffman encoding for data compression.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/huffman.png?raw=true",
      github: "https://github.com/methan6427/Compressing-using-Huffman",
      live: "https://methan6427.github.io/Compressing-using-Huffman/",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Dynamic Programming Project",
      description: "A React project showcasing dynamic programming techniques and algorithms.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/dynamic.png?raw=true",
      github: "https://github.com/methan6427/Dynamic-Programming",
      live: "https://methan6427.github.io/Dynamic-Programming/",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Portfolio Homepage",
      description: "A personal portfolio homepage designed with HTML and SCSS, showcasing professional design skills.",
      technologies: ["HTML", "SCSS"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/portfolio.png?raw=true",
      github: "https://github.com/methan6427/portfolio-homepage",
      live: "https://methan6427.github.io/portfolio-homepage/",
      category: "UI/UX Design"
    },
    {
      id: 4,
      title: "Business Landing Page",
      description: "A responsive landing page for a business, created using HTML and CSS.",
      technologies: ["HTML", "CSS"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/business-landing.png?raw=true",
      github: "https://github.com/methan6427/bussiness-landing",
      live: "https://methan6427.github.io/bussiness-landing/",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Store Simple Website",
      description: "A simple store website built with HTML, CSS, and JavaScript for basic e-commerce functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/simple-store.png?raw=true",
      github: "https://github.com/methan6427/Store-Simple-Website",
      live: "https://methan6427.github.io/Store-Simple-Website/",
      category: "Web Development"
    },
    {
      id: 6,
      title: "Dental Clinic Management System",
      description: "A Java desktop application with JavaFX and MySQL for managing dental clinic operations.",
      technologies: ["Java", "JavaFX", "MySQL"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/dental.png?raw=true",
      github: "#",
      live: "#",
      category: "Desktop Development"
    },
    {
      id: 7,
      title: "Movies Management System",
      description: "A Java desktop application using JavaFX for managing movie databases.",
      technologies: ["Java", "JavaFX"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/movie.png?raw=true",
      github: "https://github.com/methan6427/Movies-Managment-System",
      live: "https://github.com/methan6427/Movies-Managment-System",
      category: "Desktop Development"
    },
    {
      id: 8,
      title: "Flight Management System",
      description: "A JavaFX-based desktop application for managing flight details and bookings.",
      technologies: ["Java", "JavaFX"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/flight.jpg?raw=true",
      github: "https://github.com/methan6427/Flight-management-system",
      live: "https://github.com/methan6427/Flight-management-system",
      category: "Desktop Development"
    },
    {
      id: 9,
      title: "Python Projects",
      description: "A collection of small Python projects developed during a Udacity Nanodegree program.",
      technologies: ["Python"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/python.jpg?raw=true",
      github: "https://github.com/methan6427/Python-projects",
      live: "https://github.com/methan6427/Python-projects",
      category: "Programming"
    },
    {
      id: 10,
      title: "DataStructure College",
      description: "A compilation of data structure projects and assignments completed for college.",
      technologies: ["Java", "JavaFX"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/dsa.png?raw=true",
      github: "https://github.com/methan6427/DataStructure-College",
      live: "https://github.com/methan6427/DataStructure-College",
      category: "Programming"
    },
    {
      id: 11,
      title: "Dijkstra-USA-React",
      description: "Find the shortest path between 2 vertices in USA using Dijkstra's algorithm.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/dijkstra.png?raw=true",
      github: "https://github.com/methan6427/Dijkstra-USA-React",
      live: "https://methan6427.github.io/Dijkstra-USA-React/",
      category: "Web Development"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "Front End Web Developer Nanodegree (FEND)",
      description: "Specialized program focused on building interactive web applications using modern web technologies.",
      skills: ["HTML", "SCSS", "JavaScript", "Responsive Design", "Testing","Optimization"],
      completedDate: "May 24, 2025",
      issuer: "Udacity",
      details: "Construct responsive websites using CSS, Flexbox, and CSS Grid. Develop interactive websites and UI applications using JavaScript and HTML. Connect web applications to backend server data using JavaScript.",
      certificateLink: "https://www.udacity.com/certificate/e/033178aa-edf1-11ef-9ea3-cbae88ad59d9",
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/FE.png?raw=true"
    },
    {
      id: 2,
      title: "Intro to Programming Nanodegree (IPND)",
      description: "Comprehensive introduction to programming fundamentals serving as the first step in the programming journey.",
      skills: ["HTML", "CSS", "JavaScript", "Python", "OOP in Python"],
      completedDate: "February 13, 2025",
      issuer: "Udacity",
      details: "Built websites using HTML and CSS, created Python-based games and applications, developed a Mad Libs-style game using Python functions, and completed an interactive resume webpage as the final project.",
      certificateLink: "https://www.udacity.com/certificate/e/dabdce6a-899f-11ef-9878-877c1bca966b",
      image: "https://github.com/methan6427/Adam-Khabisa-Port/blob/main/public/prjPics/ITP.png?raw=true"
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
          <h2 className="section-title">My Work & Achievements</h2>
          <p className="section-subtitle">Explore my projects and professional certifications that showcase my development journey</p>
        </div>

        {/* Toggle Switch */}
        <div className="section-toggle">
          <label className="toggle-switch" aria-label="Toggle between projects and certificates">
            <input
              type="checkbox"
              checked={showCertificates}
              onChange={(e) => setShowCertificates(e.target.checked)}
            />
            <span>My Projects</span>
            <span>Certificates & Achievements</span>
          </label>
        </div>

        {!showCertificates && (
          <>
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
          </>
        )}

        {showCertificates && (
          <div className="projects-grid">
            {certificates.map((certificate, index) => (
              <div key={index} className="project-card certificate-card">
                <div className="project-image certificate-image">
                  <div className="certificate-icon">
                    <img src={certificate.image} alt={certificate.title}/>
                  </div>
                  <div className="project-category certificate-category">
                    <Calendar size={16} />
                    <span>{certificate.completedDate}</span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="certificate-issuer">{certificate.issuer}</div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.description}</p>
                  <p className="certificate-details">{certificate.details}</p>

                  <div className="project-tech">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={certificate.certificateLink} target="_blank" rel="noopener noreferrer" className="modern-btn primary">
                      <Award size={18} />
                      <span>View Certificate</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
