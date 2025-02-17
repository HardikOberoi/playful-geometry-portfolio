
const projects = [
  {
    title: "FABRECYCLE",
    category: "Next.js, MongoDB, React.JS, Node.JS",
    description: "Established a responsive web application employing Java, CSS, HTML, and JavaScript, facilitating a user-friendly interface that attracted over 2,000 new users within the first month and boosted session duration by 40%.",
    image: "/placeholder.svg",
  },
  {
    title: "CLOUD BASED RECIPE SHARING WEBSITE",
    category: "Java, React.JS, Node.JS, Next.js",
    description: "Created a comprehensive backend system utilizing Java to automate data processing tasks, leading to a reduction in manual intervention by 75 hours per month and increasing data accuracy and reliability.",
    image: "/placeholder.svg",
  }
];

export const Work = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5 backdrop-blur-sm hover-white-glow animated-border"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={project.image}
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
                    <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
