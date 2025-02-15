
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
    <section id="work" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A showcase of my technical projects and developments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-purple-100"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center p-6">
                    <h3 className="text-white text-xl font-display font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/90 mb-4">{project.category}</p>
                    <p className="text-white/90 text-sm mb-4">{project.description}</p>
                    <button className="px-6 py-2 bg-white text-primary rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
