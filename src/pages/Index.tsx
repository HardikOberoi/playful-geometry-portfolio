
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { SplineSceneBasic } from "@/components/SplineDemo";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;

      const rect = sceneRef.current.getBoundingClientRect();
      
      // Calculate the center of the robot's head
      const centerX = rect.left + (rect.width * 0.75);
      const centerY = rect.top + (rect.height * 0.4); // Adjusted to match head position
      
      // Calculate angle between cursor and center point
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      // Calculate distance for more natural movement
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.min(rect.width, rect.height) / 2;
      const scale = Math.min(distance / maxDistance, 1);
      
      // Convert to degrees with increased sensitivity and smoother movement
      const angleX = (deltaX / rect.width) * 25 * scale;
      const angleY = (deltaY / rect.height) * 25 * scale;
      
      // Update robot head/eye rotation
      sceneRef.current.style.transform = `rotateY(${angleX}deg) rotateX(${-angleY}deg)`;
      
      // Update cursor position for the agent
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
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
            transformOrigin: '75% 40%', // Adjusted to match head position
            transition: 'transform 0.1s ease-out',
            willChange: 'transform'
          }}
        >
          <SplineSceneBasic />
        </div>
      </div>
      <Work />
      <About />
      <Contact />
      
      {/* Animated cursor agent */}
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
