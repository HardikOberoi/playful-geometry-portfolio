
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { SplineSceneBasic } from "@/components/SplineDemo";
import { useEffect, useRef, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GlowEffect } from "@/components/ui/glow-effect";
import { motion, useScroll, useTransform } from "framer-motion";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Create animations based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black" ref={containerRef}>
      <div className="relative">
        <motion.div style={{ opacity, scale }} className="fixed top-0 left-0 w-full h-full z-0">
          <GlowEffect
            colors={['#4ECDC4', '#45B7AF', '#2E8B84', '#FF6B6B']}
            mode="breathe"
            blur="stronger"
            scale={2}
            duration={8}
          />
        </motion.div>
        
        <div className="relative z-10 w-full">
          <Navbar />
          
          {/* Hero Section */}
          <ContainerScroll
            titleComponent={
              <motion.h1 
                className="text-2xl md:text-4xl font-semibold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Welcome to my <br />
                <motion.span 
                  className="text-3xl md:text-[5rem] lg:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-[#4ECDC4] via-[#45B7AF] to-[#2E8B84] bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                >
                  Portfolio
                </motion.span>
              </motion.h1>
            }
          >
            <Hero />
          </ContainerScroll>

          {/* Work Section */}
          <ContainerScroll
            titleComponent={
              <motion.h2 
                className="text-2xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#FF8E3C] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                Projects
              </motion.h2>
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <Work />
            </motion.div>
          </ContainerScroll>

          {/* About Section */}
          <ContainerScroll
            titleComponent={
              <motion.h2 
                className="text-2xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#4ECDC4] via-[#45B7AF] to-[#2E8B84] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <About />
            </motion.div>
          </ContainerScroll>

          {/* Skills Section */}
          <ContainerScroll
            titleComponent={
              <motion.h2 
                className="text-2xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                Skills & Expertise
              </motion.h2>
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <Skills />
            </motion.div>
          </ContainerScroll>

          {/* Contact Section */}
          <ContainerScroll
            titleComponent={
              <motion.h2 
                className="text-2xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                Get in Touch
              </motion.h2>
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <Contact />
            </motion.div>
          </ContainerScroll>
        </div>
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <SplineSceneBasic />
      </div>
      
      <motion.div 
        className="cursor-agent"
        style={{
          transform: `translate(${cursorPos.x - 20}px, ${cursorPos.y - 20}px)`,
          background: 'white',
          maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\'/%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'4\'/%3E%3C/svg%3E")',
          WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\'/%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'4\'/%3E%3C/svg%3E")',
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Index;
