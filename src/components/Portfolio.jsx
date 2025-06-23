
import React, { useState } from 'react';
import { Github, ExternalLink, Code, Palette, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
  {
    id: 1,
    title: "Compressing using Huffman",
    description: "A React-based application that demonstrates Huffman encoding for data compression.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/api/placeholder/400/300",
    github: "#",
    live: "#",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Dynamic Programming Project",
    description: "A React project showcasing dynamic programming techniques and algorithms.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/api/placeholder/400/300",
    github: "#",
    live: "#",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Portfolio Homepage",
    description: "A personal portfolio homepage designed with HTML and SCSS, showcasing professional design skills.",
    technologies: ["HTML", "SCSS"],
    image: "/api/placeholder/400/300",
    github: "#",
    live: "#",
    category: "UI/UX Design"
  },
  {
    id: 4,
    title: "Business Landing Page",
    description: "A responsive landing page for a business, created using HTML and CSS.",
    technologies: ["HTML", "CSS"],
    image: "/api/placeholder/400/300",
    github: "#",
    live: "#",
    category: "Web Development"
  },
  {
    id: 5,
    title: "Store Simple Website",
    description: "A simple store website built with HTML, CSS, and JavaScript for basic e-commerce functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/api/placeholder/400/300",
    github: "#",
    live: "#",
    category: "Web Development"
  },
  {
    id: 6,
    title: "Dental Clinic Management System",
    description: "A Java desktop application with JavaFX and MySQL for managing dental clinic operations.",
    technologies: ["Java", "JavaFX", "MySQL"],
    image: "/api/placeholder/400/300",
    github: "#",
    live: "#",
    category: "Desktop Development"
  },
  {
    id: 7,
    title: "Movies Management System",
    description: "A Java desktop application using JavaFX for managing movie databases.",
    technologies: ["Java", "JavaFX"],
    image: "/api/placeholder/400/300",
    github: "#",
    live: "#",
    category: "Desktop Development"
  },
  {
    id: 8,
    title: "Flight Management System",
    description: "A JavaFX-based desktop application for managing flight details and bookings.",
    technologies: ["Java", "JavaFX"],
    image: "/api/placeholder/400/300",
    github: "#",
    live: "#",
    category: "Desktop Development"
  },
  {
    id: 9,
    title: "Python Projects",
    description: "A collection of small Python projects developed during a Udacity Nanodegree program.",
    technologies: ["Python"],
    image: "/api/placeholder/400/300",
    github: "#",
    live: "#",
    category: "Programming"
  },
  {
    id: 10,
    title: "DataStructure College",
    description: "A compilation of data structure projects and assignments completed for college.",
    technologies: ["Java", "C++"],
    image: "/api/placeholder/400/300",
    github: "#",
    live: "#",
    category: "Programming"
  }
];


  const categories = ["All", "Web Development", "Desktop Development", "UI/UX Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Web Development": return Code;
      case "Desktop Development": return Smartphone;
      case "UI/UX Design": return Palette;
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
                      className="p-3 bg-slate-900/80 rounded-full text-slate-50 hover:bg-cyan-500 transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
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
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-slate-50 rounded-lg hover:bg-slate-600 transition-colors duration-200 text-sm"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
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
