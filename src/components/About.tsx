
import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Palette, Smartphone } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  const skills = [
    { name: 'React.js', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'Java', icon: Code },
    { name: 'JavaFX', icon: Code },
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Palette }
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
    <section id="about" ref={aboutRef} className="py-20 px-6 bg-gray-900/50 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating engaging digital experiences through code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
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
                Algorithms and intermediate React patterns to enhance my problem-solving skills 
                and deepen my understanding of modern frontend architecture.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <skill.icon className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={24} />
                    <span className="text-white font-medium group-hover:text-cyan-100 transition-colors">{skill.name}</span>
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
