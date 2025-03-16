
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 nav-blur backdrop-blur-md",
      scrolled ? "py-2 bg-black/80" : "py-4 bg-transparent"
    )}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-white">Portfolio</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link to="/feedback" className="text-white/70 hover:text-white transition-colors">Feedback</Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 backdrop-blur-md bg-black/70 border-white/10 text-white">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Share your thoughts</h4>
                  <p className="text-sm">
                    I'd love to hear your feedback on my portfolio.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <Link to="/messages" className="text-white/70 hover:text-white transition-colors">Messages</Link>
          <Link to="/login">
            <Button variant="outline" className="border-white/20 hover:border-white hover:bg-white/10">
              Login
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="flex md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="container py-4 flex flex-col space-y-4">
            <Link to="/" className="text-white/70 hover:text-white transition-colors py-2">Home</Link>
            <Link to="/feedback" className="text-white/70 hover:text-white transition-colors py-2">Feedback</Link>
            <Link to="/messages" className="text-white/70 hover:text-white transition-colors py-2">Messages</Link>
            <Link to="/login" className="py-2">
              <Button variant="outline" className="w-full border-white/20 hover:border-white hover:bg-white/10">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
