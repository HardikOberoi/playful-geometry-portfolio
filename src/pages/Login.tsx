
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      if (data.user) {
        toast({
          title: "Login successful",
          description: "You are now logged in.",
        });
        navigate("/messages");
      }
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "There was a problem logging in.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) throw error;
      
      toast({
        title: "Sign up successful",
        description: "Please check your email for verification link.",
      });
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message || "There was a problem signing up.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-4xl font-display font-bold mb-8 bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent text-center">
            Login / Sign Up
          </h1>
          
          <motion.div 
            className="bg-white/5 rounded-lg p-6 border border-white/10 hover-white-glow"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#9b87f5]/20 focus:border-[#9b87f5] transition-all duration-300 text-white animated-border"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#9b87f5]/20 focus:border-[#9b87f5] transition-all duration-300 text-white animated-border"
                  placeholder="Your password"
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? "Loading..." : "Login"}
                </motion.button>
                
                <motion.button
                  type="button"
                  disabled={isLoading}
                  onClick={handleSignUp}
                  className="flex-1 bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign Up
                </motion.button>
              </div>
            </form>
          </motion.div>
          
          <motion.p 
            className="text-white/50 text-sm text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Note: To access the Messages page, you need to be logged in with the admin email.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
