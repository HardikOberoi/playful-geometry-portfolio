
export const About = () => {
  return (
    <div className="w-full h-full overflow-y-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border">
            <h3 className="text-xl font-display font-bold mb-4 text-white">Who I Am</h3>
            <p className="text-white/70">
              I'm a passionate developer with expertise in creating engaging web experiences. 
              I focus on building intuitive and performant applications that solve real-world problems.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border">
            <h3 className="text-xl font-display font-bold mb-4 text-white">What I Do</h3>
            <p className="text-white/70">
              I specialize in front-end development with React, creating responsive and interactive user interfaces.
              I'm also experienced in back-end development and database design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
