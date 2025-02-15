
const projects = [
  {
    title: "Project One",
    category: "3D Animation",
    image: "/placeholder.svg",
  },
  {
    title: "Project Two",
    category: "Motion Design",
    image: "/placeholder.svg",
  },
  {
    title: "Project Three",
    category: "Interactive",
    image: "/placeholder.svg",
  },
  {
    title: "Project Four",
    category: "3D Modeling",
    image: "/placeholder.svg",
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my latest projects in 3D animation and interactive design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-white text-xl font-display font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80">{project.category}</p>
                    <button className="mt-4 px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
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
