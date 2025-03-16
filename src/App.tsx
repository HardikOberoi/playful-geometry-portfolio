
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Feedback from "./pages/Feedback";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { ShootingStarsDemo } from "./components/ShootingStarsDemo";

const queryClient = new QueryClient();

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor highlight position
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Update section highlights
      const elements = document.querySelectorAll('.hover-white-glow, .section-highlight');
      elements.forEach((element) => {
        const rect = (element as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (element as HTMLElement).style.setProperty('--x', `${x}%`);
        (element as HTMLElement).style.setProperty('--y', `${y}%`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <div className="w-full overflow-x-hidden">
            <div 
              className="cursor-highlight"
              style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
              }}
            />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/login" element={<Login />} />
              <Route path="/shooting-stars" element={<ShootingStarsDemo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </div>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
