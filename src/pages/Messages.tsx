
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Navbar } from "@/components/Navbar";

export default function Messages() {
  const { data: messages, isLoading } = useQuery({
    queryKey: ['contact-messages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent">
          Contact Messages
        </h1>

        {isLoading ? (
          <div className="text-white/70">Loading messages...</div>
        ) : (
          <div className="grid gap-6">
            {messages?.map((message) => (
              <div 
                key={message.id}
                className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-wrap gap-4 justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-lg text-white/90">{message.name}</h3>
                    <a 
                      href={`mailto:${message.email}`}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {message.email}
                    </a>
                  </div>
                  <span className="text-sm text-white/50">
                    {format(new Date(message.created_at), 'PPpp')}
                  </span>
                </div>
                <p className="text-white/70 whitespace-pre-wrap">{message.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
