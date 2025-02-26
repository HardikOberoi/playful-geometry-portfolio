
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "HTML5/CSS3",
  "Tailwind CSS",
  "Node.js",
  "Java",
  "MongoDB",
  "RESTful APIs",
  "Database Design",
  "Responsive Design",
  "User Interface Design",
  "Wireframing",
  "Prototyping",
  "Git",
  "VS Code",
  "Agile/Scrum",
  "CI/CD",
  "Testing"
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
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 hover:bg-white/20 transition-colors duration-300 border border-white/5 hover:border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
