
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    
    // Camera setup
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current.position.z = 5;

    // Renderer setup
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create sphere
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0x9b87f5,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    sphereRef.current = new THREE.Mesh(geometry, material);
    sceneRef.current.add(sphereRef.current);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    sceneRef.current.add(ambientLight, pointLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (sphereRef.current) {
        sphereRef.current.rotation.x += 0.001;
        sphereRef.current.rotation.y += 0.002;
      }
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-br from-[#f8f9ff] via-[#e9eeff] to-[#f0e7ff]">
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 opacity-60"
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Hardik
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-primary bg-clip-text text-transparent"> Oberoi </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in">
            Full Stack Developer specializing in React.js, Node.js, and AWS
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="mailto:hardikoberoi04@gmail.com"
              className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hardikoberoi04@gmail.com
            </a>
            <a
              href="tel:+917417399930"
              className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 7417399930
            </a>
          </div>
          <a
            href="#work"
            className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 animate-fade-in shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};
