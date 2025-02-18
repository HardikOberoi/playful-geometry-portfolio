import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, children, color }: { href: string; children: React.ReactNode; color: string }) => (
  <a
    href={href}
    className={`font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent hover-white-glow`}
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
  color
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  color: string;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`block font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent hover-white-glow`}
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
          <a
            href="#"
            className="text-xl font-display font-bold bg-gradient-to-r from-[#9b87f5] via-[#b19dff] to-[#ffffff] bg-clip-text text-transparent hover-white-glow"
          >
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#work" color="from-[#FF6B6B] via-[#FFD93D] to-[#FF8E3C]">Work</NavLink>
            <NavLink href="#about" color="from-[#4ECDC4] via-[#45B7AF] to-[#2E8B84]">About</NavLink>
            <NavLink href="#contact" color="from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED]">Contact</NavLink>
            <NavLink href="/feedback" color="from-[#F472B6] via-[#EC4899] to-[#DB2777]">Feedback</NavLink>
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
          </div>
        </div>
      )}
    </nav>
  );
};
