
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Admin email constant - only this email will have access
const ADMIN_EMAIL = "haardikoberoi04@gmail.com"; // Admin email address

export default function Messages() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Check if current user is admin
  useEffect(() => {
    const checkAdmin = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        toast({
          title: "Access Denied",
          description: "You must be logged in to view this page.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      // Get user email
      const userEmail = data.session.user.email;
      
      // Check if user is admin
      if (userEmail !== ADMIN_EMAIL) {
        toast({
          title: "Access Denied",
          description: "You don't have permission to view this page.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      setIsCheckingAuth(false);
    };

    checkAdmin();
  }, [navigate, toast]);

  const { data: messages, isLoading } = useQuery({
    queryKey: ['contact-messages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: isAdmin, // Only run query if user is admin
  });

  // Show loading while checking auth or if not admin
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-2xl md:text-4xl font-display font-bold mb-8 bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent">
            Checking access...
          </h1>
        </div>
      </div>
    );
  }

  // If not admin, this should never show due to the redirect, but add as safeguard
  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-2xl md:text-4xl font-display font-bold mb-8 bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent">
          Contact Messages
        </h1>

        {isLoading ? (
          <div className="text-white/70">Loading messages...</div>
        ) : (
          <div className="grid gap-4 md:gap-6">
            {messages?.length === 0 ? (
              <div className="bg-white/5 rounded-lg p-4 md:p-6 border border-white/10">
                <p className="text-white/70">No messages yet.</p>
              </div>
            ) : (
              messages?.map((message) => (
                <div 
                  key={message.id}
                  className="bg-white/5 rounded-lg p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3">
                    <div>
                      <h3 className="font-medium text-lg text-white/90">{message.name}</h3>
                      <a 
                        href={`mailto:${message.email}`}
                        className="text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base"
                      >
                        {message.email}
                      </a>
                    </div>
                    <span className="text-sm text-white/50">
                      {format(new Date(message.created_at), 'PPpp')}
                    </span>
                  </div>
                  <p className="text-white/70 whitespace-pre-wrap text-sm md:text-base">{message.message}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
