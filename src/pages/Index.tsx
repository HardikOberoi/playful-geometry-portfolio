
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { SplineSceneBasic } from "@/components/SplineDemo";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update Spline scene based on mouse position
      const scene = document.querySelector('.spline-scene') as HTMLElement;
      if (scene) {
        const rect = scene.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        
        // Apply rotation transform for head/eye movement instead of translation
        // This creates a "looking" effect rather than moving the entire robot
        scene.style.transform = `rotateY(${x * 15}deg) rotateX(${-y * 15}deg)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="absolute inset-0 pointer-events-none spline-scene transition-transform duration-300 ease-out origin-center">
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
