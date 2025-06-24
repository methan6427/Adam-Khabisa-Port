
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particles = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'bg-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      container.appendChild(particle);
      particles.push(particle);
    }

    // Animate particles
    particles.forEach((particle, index) => {
      gsap.set(particle, {
        scale: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2
      });

      gsap.to(particle, {
        y: '+=100vh',
        rotation: 360,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        ease: 'none',
        delay: Math.random() * 5
      });

      gsap.to(particle, {
        opacity: 0.1,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    });

    // Floating geometric shapes
    const shapes = [];
    for (let i = 0; i < 5; i++) {
      const shape = document.createElement('div');
      shape.style.position = 'absolute';
      shape.style.width = Math.random() * 100 + 50 + 'px';
      shape.style.height = shape.style.width;
      shape.style.border = '1px solid rgba(0, 255, 255, 0.1)';
      shape.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      shape.style.left = Math.random() * 100 + '%';
      shape.style.top = Math.random() * 100 + '%';
      container.appendChild(shape);
      shapes.push(shape);
    }

    shapes.forEach(shape => {
      gsap.to(shape, {
        rotation: 360,
        duration: Math.random() * 30 + 20,
        repeat: -1,
        ease: 'none'
      });

      gsap.to(shape, {
        x: '+=200',
        y: '+=100',
        duration: Math.random() * 15 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });

    return () => {
      // Cleanup
      particles.forEach(particle => particle.remove());
      shapes.forEach(shape => shape.remove());
    };
  }, []);

  return <div ref={containerRef} className="animated-bg"></div>;
};

export default AnimatedBackground;
