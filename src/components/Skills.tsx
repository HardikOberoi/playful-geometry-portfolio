
import { Code2, Palette, PencilRuler, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    items: ["React.js", "Next.js", "TypeScript", "HTML5/CSS3", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80"
  },
  {
    category: "Backend Development",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Node.js", "Java", "MongoDB", "RESTful APIs", "Database Design"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80"
  },
  {
    category: "UI/UX Design",
    icon: <Palette className="w-6 h-6" />,
    items: ["Responsive Design", "User Interface Design", "Wireframing", "Prototyping"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80"
  },
  {
    category: "Tools & Methods",
    icon: <PencilRuler className="w-6 h-6" />,
    items: ["Git", "VS Code", "Agile/Scrum", "CI/CD", "Testing"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80"
  }
];

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
  return (
    <section id="skills" className="py-20 section-highlight overflow-hidden">
      <div className="container mx-auto px-6">
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
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8" // Increased gap and added top margin
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 mb-8" // Added bottom margin
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={skillGroup.image}
                    alt={skillGroup.category}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-105 group-hover:scale-100 transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
                </div>

                <div className="relative z-10 p-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 mb-6"
                  >
                    <div className="p-3 rounded-lg bg-white/10 text-white group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {skillGroup.category}
                    </h3>
                  </motion.div>

                  <motion.div 
                    className="flex flex-wrap gap-3" // Increased gap between skill tags
                    variants={containerVariants}
                  >
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        variants={itemVariants}
                        className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 hover:bg-white/20 transition-colors duration-300 border border-white/5 hover:border-white/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <div className="absolute inset-0 border border-white/10 rounded-2xl animate-border-glow" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
