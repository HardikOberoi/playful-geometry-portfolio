
export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              About Me
            </h2>
            <p className="text-gray-600">
              Passionate about creating immersive digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                With over 5 years of experience in 3D animation and motion design,
                I specialize in creating captivating visual experiences that tell
                compelling stories and engage audiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My work combines technical expertise with artistic vision,
                delivering high-quality animations that exceed client expectations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Skill>3D Animation</Skill>
                <Skill>Motion Design</Skill>
                <Skill>Character Rigging</Skill>
                <Skill>Visual Effects</Skill>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-display font-bold text-lg">5+ Years</p>
                <p className="text-sm">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
    {children}
  </span>
);
