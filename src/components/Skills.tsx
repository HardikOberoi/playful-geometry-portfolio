
import { Code2, Palette, PencilRuler, Terminal } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    items: ["React.js", "Next.js", "TypeScript", "HTML5/CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Node.js", "Java", "MongoDB", "RESTful APIs", "Database Design"]
  },
  {
    category: "UI/UX Design",
    icon: <Palette className="w-6 h-6" />,
    items: ["Responsive Design", "User Interface Design", "Wireframing", "Prototyping"]
  },
  {
    category: "Tools & Methods",
    icon: <PencilRuler className="w-6 h-6" />,
    items: ["Git", "VS Code", "Agile/Scrum", "CI/CD", "Testing"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 section-highlight">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent hover-white-glow">
              Skills & Expertise
            </h2>
            <p className="text-white/70 hover-white-glow">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90 hover:bg-white/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
