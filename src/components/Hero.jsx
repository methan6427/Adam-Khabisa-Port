import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);
  const photoRef = useRef(null);
  const wavesRef = useRef(null);
  const orbs1Ref = useRef(null);
  const orbs2Ref = useRef(null);

  useEffect(() => {
    // Create multiple types of particles
    const createFloatingParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const colors = ['bg-cyan-400', 'bg-blue-400', 'bg-purple-400', 'bg-teal-400'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      particle.className = `absolute rounded-full ${randomColor} opacity-40 animate-float-random`;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (Math.random() * 8 + 4) + 's';
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    // Create shooting stars
    const createShootingStar = () => {
      if (!particlesRef.current) return;
      
      const star = document.createElement('div');
      star.className = 'absolute w-1 h-1 bg-cyan-300 rounded-full animate-shooting-star opacity-80';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 50 + '%';
      
      particlesRef.current.appendChild(star);
      
      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      }, 3000);
    };

    const particleInterval = setInterval(createFloatingParticle, 200);
    const starInterval = setInterval(createShootingStar, 2000);

    // GSAP Animation for the photo with more complex movement
    if (photoRef.current) {
      gsap.fromTo(photoRef.current, 
        {
          y: 150,
          opacity: 0,
          scale: 0.7,
          rotation: -10
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 2,
          ease: "back.out(1.7)",
          delay: 0.3
        }
      );

      // Complex floating animation
      gsap.to(photoRef.current, {
        y: -15,
        x: 5,
        rotation: 2,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2
      });

      // Additional subtle rotation
      gsap.to(photoRef.current, {
        rotation: -2,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 3
      });
    }

    // Animate floating orbs
    if (orbs1Ref.current) {
      gsap.to(orbs1Ref.current, {
        x: 100,
        y: -50,
        duration: 8,
        ease: "none",
        repeat: -1,
        yoyo: true
      });
    }

    if (orbs2Ref.current) {
      gsap.to(orbs2Ref.current, {
        x: -80,
        y: 60,
        duration: 10,
        ease: "none",
        repeat: -1,
        yoyo: true
      });
    }

    return () => {
      clearInterval(particleInterval);
      clearInterval(starInterval);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-cyan-900/30">
        {/* Animated wave patterns */}
        <div ref={wavesRef} className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-wave-1"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/20 to-transparent animate-wave-2"></div>
        </div>

        {/* Floating orbs */}
        <div ref={orbs1Ref} className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div ref={orbs2Ref} className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-cyan-600/10 rounded-full blur-xl animate-pulse-slow"></div>

        {/* Particle container */}
        <div ref={particlesRef} className="absolute inset-0"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)] animate-breathe"></div>
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,transparent_24%,rgba(6,182,212,0.3)_25%,rgba(6,182,212,0.3)_26%,transparent_27%,transparent_74%,rgba(6,182,212,0.3)_75%,rgba(6,182,212,0.3)_76%,transparent_77%,transparent)] bg-[length:50px_50px] animate-grid-move"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6 fade-in">
          {/* Fixed Photo */}
          <div className="flex justify-center mb-8">
            <div 
              ref={photoRef}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-4 border-cyan-400/30 cyan-glow animate-glow-pulse overflow-hidden"
            >
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQENtvMLbvrSFA/profile-displayphoto-shrink_800_800/B4EZQUrGFGHgAg-/0/1735513630898?e=1756339200&v=beta&t=krsflQBwsmVhnW86J5DFEohDZqxYFRKh3njhGs5MSxE" 
                alt="Adam Khabisa"
                className="w-full h-full object-cover object-center rounded-full"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-slate-50 animate-slide-up">Hi, I'm</span>
            <span className="block gradient-text animate-slide-up-delay">
              Adam Khabisa
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            4th-year Computer Science student specializing in 
            <span className="text-cyan-400 font-semibold"> frontend development</span> 
            {' '}with React and modern web technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up-delay">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-50 font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 hover-scale cyan-glow animate-button-glow"
            >
              View Portfolio
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 hover-scale animate-border-glow"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom">
        <button onClick={scrollToAbout} className="text-cyan-400 hover:text-cyan-300 transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
