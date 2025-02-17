
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero = () => {
  return (
    <div className="relative h-screen section-portfolio section-highlight">
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <div className="mb-4 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/5 backdrop-blur-sm text-[#9b87f5] border border-white/10 hover-white-glow animated-border">
              Available for Full-Time Positions
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in bg-gradient-to-r from-[#9b87f5] via-[#b19dff] to-[#ffffff] bg-clip-text text-transparent hover-white-glow">
            Hardik
            <span className="bg-gradient-to-r from-[#ffffff] via-[#b19dff] to-[#9b87f5] bg-clip-text text-transparent"> Oberoi </span>
          </h1>
          <div className="relative mb-8">
            <p className="text-lg md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto animate-fade-in font-display hover-white-glow">
              Full Stack Developer & Data Scientist
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary/80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:haardikoberoi04@gmail.com" className="text-white/80 hover:text-white transition-colors">
                haardikoberoi04@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary/80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+917417399930" className="text-white/80 hover:text-white transition-colors">
                +91 7417399930
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-4 animate-fade-in">
            <a
              href="#work"
              className="inline-block bg-primary/20 text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/30 transition-all duration-300 backdrop-blur-sm border border-primary/30 hover-white-glow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block bg-white/5 text-white/90 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover-white-glow"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
