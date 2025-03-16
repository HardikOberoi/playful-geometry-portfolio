
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export const Work = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*');
      
      if (error) throw error;
      return data || [];
    }
  });

  // Sample fallback projects in case nothing is loaded from Supabase
  const fallbackProjects = [
    {
      id: "1",
      title: "Portfolio Website",
      category: "Web Development",
      description: "A responsive personal portfolio showcasing my skills and projects",
      image_url: "/placeholder.svg",
      github_url: "https://github.com/yourusername/portfolio",
      live_url: "https://yourportfolio.com"
    },
    {
      id: "2",
      title: "E-commerce Platform",
      category: "Full Stack",
      description: "A complete e-commerce solution with payment integration",
      image_url: "/placeholder.svg",
      github_url: "https://github.com/yourusername/ecommerce",
      live_url: "https://yourecommerce.com"
    }
  ];

  // Use fallback projects if no data is loaded from Supabase
  const displayProjects = (projects && projects.length > 0) ? projects : fallbackProjects;

  return (
    <section id="work" className="py-20 section-work section-highlight">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#FF8E3C] bg-clip-text text-transparent hover-white-glow">
            Projects
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto hover-white-glow">
            A showcase of my technical projects and developments
          </p>
          {error && (
            <p className="text-red-500 mt-2">
              Error loading projects. Using fallback content.
            </p>
          )}
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-2xl border border-white/10 overflow-hidden">
                <Skeleton className="h-64 md:h-80 w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex space-x-4">
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5 backdrop-blur-sm hover-white-glow animated-border"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-64 md:h-80">
                  <img
                    src={project.image_url || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
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
                <div className="p-4 bg-black/30">
                  <h3 className="text-white text-lg font-display font-medium">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
