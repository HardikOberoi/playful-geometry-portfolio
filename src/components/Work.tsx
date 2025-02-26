
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Work = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*');
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <section id="work" className="py-20 section-work section-highlight">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#FF8E3C] bg-clip-text text-transparent hover-white-glow">
            Projects
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto hover-white-glow">
            A showcase of my technical projects and developments
          </p>
        </div>
        
        {isLoading ? (
          <div className="text-center text-white/70">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects?.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5 backdrop-blur-sm hover-white-glow animated-border"
              >
                <div className="relative h-64 md:h-80">
                  <img
                    src={project.image_url || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center p-6">
                      <h3 className="text-white text-xl font-display font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/90 mb-4">{project.category}</p>
                      <p className="text-white/90 text-sm mb-4">{project.description}</p>
                      <div className="space-x-4">
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300"
                          >
                            GitHub
                          </a>
                        )}
                        {project.live_url && (
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
