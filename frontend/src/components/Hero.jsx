import { useEffect, useRef } from 'react';
import './Hero.css';
import React from 'react'

const Hero = () => {
  const canvasRef = useRef(null);  // Use ref to access the canvas element

  useEffect(() => {
    const canvas = canvasRef.current;  // Get the current canvas element
    const ctx = canvas.getContext("2d");
    let particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        d: Math.random() * 1.2 + 0.5,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#d8b4fe';
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      update();
    }

    function update() {
      particles.forEach(p => {
        p.y -= p.d;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
      });
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener('resize', resize);
    createParticles();
    animate();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="hero-background">
      <canvas ref={canvasRef}></canvas>  {/* Use ref here */}
    </div>
  );
};

export default Hero;
