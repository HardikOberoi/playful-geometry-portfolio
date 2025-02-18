
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { SplineSceneBasic } from "@/components/SplineDemo";
import { useEffect, useRef } from "react";

const Index = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;

      const rect = sceneRef.current.getBoundingClientRect();
      
      // Calculate the center of the robot's position
      const centerX = rect.left + (rect.width * 0.75); // Adjust based on robot's position
      const centerY = rect.top + (rect.height * 0.5);
      
      // Calculate angle between cursor and center point
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      // Convert to degrees and limit rotation
      const angleX = Math.min(Math.max((deltaX / (rect.width / 2)) * 10, -10), 10);
      const angleY = Math.min(Math.max((deltaY / (rect.height / 2)) * 10, -10), 10);
      
      sceneRef.current.style.transform = `rotateY(${angleX}deg) rotateX(${-angleY}deg)`;
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
            transformOrigin: '75% 50%', 
            transition: 'transform 0.3s ease-out',
            willChange: 'transform'
          }}
        >
          <SplineSceneBasic />
        </div>
      </div>
      <Work />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
