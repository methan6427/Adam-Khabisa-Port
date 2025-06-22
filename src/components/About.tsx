
import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Palette, Smartphone } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  const skills = [
    { name: 'React.js', level: 90, icon: Code },
    { name: 'JavaScript/TypeScript', level: 85, icon: Code },
    { name: 'CSS/Tailwind', level: 88, icon: Palette },
    { name: 'Node.js', level: 75, icon: Database },
    { name: 'Mobile Development', level: 70, icon: Smartphone },
    { name: 'UI/UX Design', level: 80, icon: Palette }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating engaging digital experiences through code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a 4th-year Computer Science student, I've developed a passion for frontend development 
                and creating user experiences that matter. My journey started with curiosity about how 
                websites work and evolved into a deep love for crafting beautiful, functional web applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in React.js and modern web technologies, always staying up-to-date with 
                the latest trends and best practices in frontend development. I believe in writing 
                clean, maintainable code that not only works but tells a story.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-500/30">
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">Currently Learning</h4>
              <p className="text-gray-300">
                Advanced React patterns, Three.js for 3D web experiences, and exploring the 
                intersection of AI and frontend development.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="text-cyan-400" size={20} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: skillsVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
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
