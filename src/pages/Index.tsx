
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { SplineSceneBasic } from "@/components/SplineDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="absolute inset-0 pointer-events-none">
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
