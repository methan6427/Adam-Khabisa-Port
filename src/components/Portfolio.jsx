
import React, { useState } from 'react';
import { Github, ExternalLink, Code, Palette, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern React-based e-commerce platform with cart functionality, user authentication, and payment integration.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      image: "/api/placeholder/400/300",
      github: "#",
      live: "#",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      image: "/api/placeholder/400/300",
      github: "#",
      live: "#",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with smooth animations and responsive design.",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      image: "/api/placeholder/400/300",
      github: "#",
      live: "#",
      category: "UI/UX Design"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      image: "/api/placeholder/400/300",
      github: "#",
      live: "#",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Java Desktop App",
      description: "Desktop application built with Java and JavaFX for data management and visualization.",
      technologies: ["Java", "JavaFX", "CSS"],
      image: "/api/placeholder/400/300",
      github: "#",
      live: "#",
      category: "Desktop Development"
    },
    {
      id: 6,
      title: "Interactive Web Game",
      description: "Browser-based game with animations and interactive features built with vanilla JavaScript.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/api/placeholder/400/300",
      github: "#",
      live: "#",
      category: "Web Development"
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
