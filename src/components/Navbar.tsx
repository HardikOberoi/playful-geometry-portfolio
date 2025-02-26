
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const NavLink = ({ href, children, color, target }: { href: string; children: React.ReactNode; color: string; target?: string }) => (
  <a
    href={href}
    target={target}
    className={`font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent hover-white-glow flex items-center gap-2`}
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
  color,
  target
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  color: string;
  target?: string;
}) => (
  <a
    href={href}
    onClick={onClick}
    target={target}
    className={`block font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent hover-white-glow flex items-center gap-2`}
  >
    {children}
  </a>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="text-xl font-display font-bold bg-gradient-to-r from-[#9b87f5] via-[#b19dff] to-[#ffffff] bg-clip-text text-transparent hover-white-glow"
            >
              Portfolio
            </a>
            <div className="hidden md:flex items-center gap-4">
              <NavLink 
                href="https://github.com/" 
                color="from-[#9b87f5] via-[#b19dff] to-[#ffffff]"
                target="_blank"
              >
                <Github size={20} />
                GitHub
              </NavLink>
              <NavLink 
                href="https://www.linkedin.com/in/hardik-oberoi-84693a251/" 
                color="from-[#9b87f5] via-[#b19dff] to-[#ffffff]"
                target="_blank"
              >
                <Linkedin size={20} />
                LinkedIn
              </NavLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#work" color="from-[#FF6B6B] via-[#FFD93D] to-[#FF8E3C]">Work</NavLink>
            <NavLink href="#about" color="from-[#4ECDC4] via-[#45B7AF] to-[#2E8B84]">About</NavLink>
            <NavLink href="#contact" color="from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED]">Contact</NavLink>
            <NavLink href="/feedback" color="from-[#F472B6] via-[#EC4899] to-[#DB2777]">Feedback</NavLink>
            <NavLink href="/messages" color="from-[#4F46E5] via-[#7C3AED] to-[#9333EA]">Messages</NavLink>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <MobileNavLink 
              href="https://github.com/" 
              onClick={() => setIsMenuOpen(false)} 
              color="from-[#9b87f5] via-[#b19dff] to-[#ffffff]"
              target="_blank"
            >
              <Github size={20} />
              GitHub
            </MobileNavLink>
            <MobileNavLink 
              href="https://www.linkedin.com/in/hardik-oberoi-84693a251/" 
              onClick={() => setIsMenuOpen(false)} 
              color="from-[#9b87f5] via-[#b19dff] to-[#ffffff]"
              target="_blank"
            >
              <Linkedin size={20} />
              LinkedIn
            </MobileNavLink>
            <MobileNavLink href="#work" onClick={() => setIsMenuOpen(false)} color="from-[#FF6B6B] via-[#FFD93D] to-[#FF8E3C]">
              Work
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)} color="from-[#4ECDC4] via-[#45B7AF] to-[#2E8B84]">
              About
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)} color="from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED]">
              Contact
            </MobileNavLink>
            <MobileNavLink href="/feedback" onClick={() => setIsMenuOpen(false)} color="from-[#F472B6] via-[#EC4899] to-[#DB2777]">
              Feedback
            </MobileNavLink>
            <MobileNavLink href="/messages" onClick={() => setIsMenuOpen(false)} color="from-[#4F46E5] via-[#7C3AED] to-[#9333EA]">
              Messages
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
