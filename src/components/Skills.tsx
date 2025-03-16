
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const Skills = () => {
  const { data: skills, isLoading, error } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data || [];
    }
  });

  // Fallback skills in case nothing is loaded from Supabase
  const fallbackSkills = [
    { id: "1", name: "React", category: "Frontend" },
    { id: "2", name: "TypeScript", category: "Language" },
    { id: "3", name: "Node.js", category: "Backend" },
    { id: "4", name: "Tailwind CSS", category: "CSS" },
    { id: "5", name: "Next.js", category: "Framework" },
    { id: "6", name: "Supabase", category: "Backend" },
    { id: "7", name: "JavaScript", category: "Language" },
    { id: "8", name: "Framer Motion", category: "Animation" },
    { id: "9", name: "Git", category: "Tool" },
    { id: "10", name: "Responsive Design", category: "Design" },
    { id: "11", name: "Python", category: "Language" }
  ];

  // Use fallback skills if no data is loaded from Supabase
  const displaySkills = (skills && skills.length > 0) ? skills : fallbackSkills;

  return (
    <section id="skills" className="py-20 section-highlight overflow-visible">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent hover-white-glow">
              Skills & Expertise
            </h2>
            <p className="text-white/70 hover-white-glow">
              Technologies and tools I work with
            </p>
            {error && (
              <p className="text-red-500 mt-2">
                Error loading skills. Using fallback skills.
              </p>
            )}
          </motion.div>

          {isLoading ? (
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {Array(10).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-full" />
              ))}
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
            >
              {displaySkills.map((skill) => (
                <motion.span
                  key={skill.id}
                  variants={itemVariants}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 hover:bg-white/20 transition-colors duration-300 border border-white/5 hover:border-white/20 inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
