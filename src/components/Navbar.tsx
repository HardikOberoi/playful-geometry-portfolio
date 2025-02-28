
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const NavLink = ({ href, children, color, target, onClick }: { href: string; children: React.ReactNode; color: string; target?: string; onClick?: () => void }) => (
  <motion.a
    href={href}
    target={target}
    onClick={onClick}
    className={`font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent hover-white-glow flex items-center gap-2`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const RouterLink = ({ to, children, color, onClick }: { to: string; children: React.ReactNode; color: string; onClick?: () => void }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={to}
      onClick={onClick}
      className={`font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent hover-white-glow flex items-center gap-2`}
    >
      {children}
    </Link>
  </motion.div>
);

export const Navbar = () => {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Check if user is logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };
    
    checkSession();
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully."
    });
    closeMenu();
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="text-lg md:text-xl font-display font-bold bg-gradient-to-r from-[#9b87f5] via-[#b19dff] to-[#ffffff] bg-clip-text text-transparent hover-white-glow"
              >
                Portfolio
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center gap-4">
              <NavLink 
                href="https://github.com/" 
                color="from-[#9b87f5] via-[#b19dff] to-[#ffffff]"
                target="_blank"
              >
                <Github size={18} />
                GitHub
              </NavLink>
              <NavLink 
                href="https://www.linkedin.com/in/hardik-oberoi-84693a251/" 
                color="from-[#9b87f5] via-[#b19dff] to-[#ffffff]"
                target="_blank"
              >
                <Linkedin size={18} />
                LinkedIn
              </NavLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <NavLink href="#work" color="from-[#FF6B6B] via-[#FFD93D] to-[#FF8E3C]">Work</NavLink>
            <NavLink href="#about" color="from-[#4ECDC4] via-[#45B7AF] to-[#2E8B84]">About</NavLink>
            <NavLink href="#contact" color="from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED]">Contact</NavLink>
            <RouterLink to="/feedback" color="from-[#F472B6] via-[#EC4899] to-[#DB2777]">Feedback</RouterLink>
            {isLoggedIn ? (
              <>
                <RouterLink to="/messages" color="from-[#4F46E5] via-[#7C3AED] to-[#9333EA]">Messages</RouterLink>
                <motion.button
                  onClick={handleLogout}
                  className="font-medium bg-gradient-to-r from-[#EF4444] via-[#F87171] to-[#FCA5A5] bg-clip-text text-transparent hover-white-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <RouterLink to="/login" color="from-[#4F46E5] via-[#7C3AED] to-[#9333EA]">Login</RouterLink>
            )}
          </div>

          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md shadow-lg z-50"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            <NavLink 
              href="https://github.com/" 
              onClick={closeMenu} 
              color="from-[#9b87f5] via-[#b19dff] to-[#ffffff]"
              target="_blank"
            >
              <Github size={18} />
              GitHub
            </NavLink>
            <NavLink 
              href="https://www.linkedin.com/in/hardik-oberoi-84693a251/" 
              onClick={closeMenu} 
              color="from-[#9b87f5] via-[#b19dff] to-[#ffffff]"
              target="_blank"
            >
              <Linkedin size={18} />
              LinkedIn
            </NavLink>
            <NavLink href="#work" onClick={closeMenu} color="from-[#FF6B6B] via-[#FFD93D] to-[#FF8E3C]">
              Work
            </NavLink>
            <NavLink href="#about" onClick={closeMenu} color="from-[#4ECDC4] via-[#45B7AF] to-[#2E8B84]">
              About
            </NavLink>
            <NavLink href="#contact" onClick={closeMenu} color="from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED]">
              Contact
            </NavLink>
            <RouterLink to="/feedback" onClick={closeMenu} color="from-[#F472B6] via-[#EC4899] to-[#DB2777]">
              Feedback
            </RouterLink>
            {isLoggedIn ? (
              <>
                <RouterLink to="/messages" onClick={closeMenu} color="from-[#4F46E5] via-[#7C3AED] to-[#9333EA]">
                  Messages
                </RouterLink>
                <motion.button
                  onClick={handleLogout}
                  className="font-medium bg-gradient-to-r from-[#EF4444] via-[#F87171] to-[#FCA5A5] bg-clip-text text-transparent hover-white-glow w-full text-left"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <RouterLink to="/login" onClick={closeMenu} color="from-[#4F46E5] via-[#7C3AED] to-[#9333EA]">
                Login
              </RouterLink>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
