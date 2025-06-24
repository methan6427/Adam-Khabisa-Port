import React, { useState } from 'react';
import { Github, ExternalLink, Code, Palette, Smartphone, Database } from 'lucide-react';

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Compressing using Huffman",
      description: "A React-based application that demonstrates Huffman encoding for data compression.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "https://drive.google.com/file/d/1Wo78WTJCHOakCF2I6jfUjoVuFO0nmXjm/view?usp=drive_link",
      github: "https://github.com/methan6427/Compressing-using-Huffman",
      live: "https://methan6427.github.io/Compressing-using-Huffman/",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Dynamic Programming Project",
      description: "A React project showcasing dynamic programming techniques and algorithms.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "https://drive.google.com/file/d/1EcOkiPOOC1Q6Iz9BFHQGNoELW5zkQYh_/view?usp=drive_link",
      github: "https://github.com/methan6427/Dynamic-Programming",
      live: "https://methan6427.github.io/Dynamic-Programming/",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Portfolio Homepage",
      description: "A personal portfolio homepage designed with HTML and SCSS, showcasing professional design skills.",
      technologies: ["HTML", "SCSS"],
      image: "https://drive.google.com/file/d/1Z3fDA4wjIstWAdQWluT-ufoP3YESMkgy/view?usp=drive_link",
      github: "https://github.com/methan6427/portfolio-homepage",
      live: "https://methan6427.github.io/portfolio-homepage/",
      category: "UI/UX Design"
    },
    {
      id: 4,
      title: "Business Landing Page",
      description: "A responsive landing page for a business, created using HTML and CSS.",
      technologies: ["HTML", "CSS"],
      image: "https://drive.google.com/file/d/17N1l4ASgYqnQ40Qj9q9DTjyhVNSgk9TD/view?usp=drive_link",
      github: "https://github.com/methan6427/bussiness-landing",
      live: "https://methan6427.github.io/bussiness-landing/",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Store Simple Website",
      description: "A simple store website built with HTML, CSS, and JavaScript for basic e-commerce functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://drive.google.com/file/d/1DydFfczUIfsN5deslv1HRpWxf2l8Jl4n/view?usp=drive_link",
      github: "https://github.com/methan6427/Store-Simple-Website",
      live: "https://methan6427.github.io/Store-Simple-Website/",
      category: "Web Development"
    },
    {
      id: 6,
      title: "Dental Clinic Management System",
      description: "A Java desktop application with JavaFX and MySQL for managing dental clinic operations.",
      technologies: ["Java", "JavaFX", "MySQL"],
      image: "https://drive.google.com/file/d/1_UJ-ykKtL53g4HbcgqB9F2B5-Q0GoO8n/view?usp=drive_link",
      github: "#",
      live: "#",
      category: "Desktop Development"
    },
    {
      id: 7,
      title: "Movies Management System",
      description: "A Java desktop application using JavaFX for managing movie databases.",
      technologies: ["Java", "JavaFX"],
      image: "https://drive.google.com/file/d/1rd7D8ZKUqUgNbo076ImiQFQKnD7Eek48/view?usp=drive_link",
      github: "https://github.com/methan6427/Movies-Managment-System",
      live: "https://github.com/methan6427/Movies-Managment-System",
      category: "Desktop Development"
    },
    {
      id: 8,
      title: "Flight Management System",
      description: "A JavaFX-based desktop application for managing flight details and bookings.",
      technologies: ["Java", "JavaFX"],
      image: "https://drive.google.com/file/d/1XBRQQl45Mninmq3hupPjgyx3ho7d3OaN/view?usp=drive_link",
      github: "https://github.com/methan6427/Flight-management-system",
      live: "https://github.com/methan6427/Flight-management-system",
      category: "Desktop Development"
    },
    {
      id: 9,
      title: "Python Projects",
      description: "A collection of small Python projects developed during a Udacity Nanodegree program.",
      technologies: ["Python"],
      image: "https://drive.google.com/file/d/1QLDxzs8jNAe94nwnpKlsX9OO1G3tpVWL/view?usp=drive_link",
      github: "https://github.com/methan6427/Python-projects",
      live: "https://github.com/methan6427/Python-projects",
      category: "Programming"
    },
    {
      id: 10,
      title: "DataStructure College",
      description: "A compilation of data structure projects and assignments completed for college.",
      technologies: ["Java", "C++"],
      image: "https://drive.google.com/file/d/1vbOq5f3XAavF2piaCYuLE-EPlCEMSSrT/view?usp=drive_link",
      github: "https://github.com/methan6427/DataStructure-College",
      live: "https://github.com/methan6427/DataStructure-College",
      category: "Programming"
    },
    {
      id: 11,
      title: "Dijkstra-USA-React",
      description: "Find the shortest path between 2 vertices in USA using Dijkstra's algorithm.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "https://drive.google.com/file/d/19OegN_oKtWz-6LDlNi3H2ARgaDTnpmHq/view?usp=drive_link",
      github: "https://github.com/methan6427/Dijkstra-USA-React",
      live: "https://methan6427.github.io/Dijkstra-USA-React/",
      category: "Web Development"
    }
  ];

  const categories = ["All", "Web Development", "Desktop Development", "UI/UX Design", "Programming"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Web Development": return Code;
      case "Desktop Development": return Smartphone;
      case "UI/UX Design": return Palette;
      case "Programming": return Database;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-800/30 to-slate-900/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-cyan-500 text-slate-50 cyan-glow'
                      : 'glass-effect text-slate-300 hover:bg-slate-700 hover:text-slate-50'
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative glass-effect rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover-scale"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10"></div>
                <Code size={48} className="text-cyan-400/60" />
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-cyan-500/20 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900/80 rounded-full text-slate-50 hover:bg-cyan-500 transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900/80 rounded-full text-slate-50 hover:bg-cyan-500 transition-colors duration-200"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-slate-50 rounded-lg hover:bg-slate-600 transition-colors duration-200 text-sm"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 text-slate-50 rounded-lg hover:bg-cyan-600 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
