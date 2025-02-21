
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { SplineSceneBasic } from "@/components/SplineDemo";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [keyRotation, setKeyRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;

      const rect = sceneRef.current.getBoundingClientRect();
      const centerX = rect.left + (rect.width * 0.75);
      const centerY = rect.top + (rect.height * 0.4);
      const deltaX = (e.clientX - centerX) * 0.1;
      const deltaY = (e.clientY - centerY) * 0.1;
      const maxAngle = 15;
      const angleX = Math.max(-maxAngle, Math.min(maxAngle, deltaX));
      const angleY = Math.max(-maxAngle, Math.min(maxAngle, deltaY));
      
      if (sceneRef.current) {
        sceneRef.current.style.transform = `rotateY(${angleX}deg) rotateX(${-angleY}deg)`;
      }
      
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        if (scrollProgress > 0 && scrollProgress < 1) {
          // Apply rolling/slide effect based on scroll position
          const translateY = Math.max(0, Math.min(20, 20 * (1 - scrollProgress)));
          const scale = 0.98 + (0.02 * Math.min(1, Math.max(0, scrollProgress)));
          const opacity = 0.5 + (0.5 * Math.min(1, Math.max(0, scrollProgress)));
          
          section.style.transform = `translateY(${translateY}px) scale(${scale})`;
          section.style.opacity = opacity.toString();
          section.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }
      });
    };

    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleScroll);
    
    // Trigger initial scroll event
    handleScroll();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="relative">
        <Hero />
        <div 
          ref={sceneRef}
          className="absolute inset-0 pointer-events-none spline-scene" 
          style={{ 
            transformOrigin: '75% 40%',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform',
            animation: 'fadeIn 0.5s ease-out'
          }}
        >
          <SplineSceneBasic />
        </div>
      </div>
      <Work />
      <About />
      <Skills />
      <Contact />
      
      <div 
        className="cursor-agent"
        style={{
          transform: `translate(${cursorPos.x - 20}px, ${cursorPos.y - 20}px)`,
          background: 'white',
          maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\'/%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'4\'/%3E%3C/svg%3E")',
          WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\'/%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'4\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
};

export default Index;
