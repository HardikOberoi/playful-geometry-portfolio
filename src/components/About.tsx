
export const About = () => {
  return (
    <div className="w-full h-full overflow-y-auto px-4 bg-zinc-900/90 rounded-xl">
      <div className="max-w-4xl mx-auto py-8">
        <div className="space-y-6">
          <div className="bg-[#1A1F2C]/80 rounded-2xl p-8 border border-[#6C6C6C]/30 hover:bg-[#1A1F2C]/90 transition-all duration-300 hover-white-glow animated-border backdrop-blur-sm">
            <h3 className="text-2xl font-display font-bold mb-4 text-[#4ECDC4]">Who I Am</h3>
            <p className="text-zinc-400/90 text-lg">
              I'm a passionate developer with expertise in creating engaging web experiences. 
              I focus on building intuitive and performant applications that solve real-world problems.
            </p>
          </div>

          <div className="bg-[#1A1F2C]/80 rounded-2xl p-8 border border-[#6C6C6C]/30 hover:bg-[#1A1F2C]/90 transition-all duration-300 hover-white-glow animated-border backdrop-blur-sm">
            <h3 className="text-2xl font-display font-bold mb-4 text-[#4ECDC4]">What I Do</h3>
            <p className="text-zinc-400/90 text-lg">
              I specialize in front-end development with React, creating responsive and interactive user interfaces.
              I'm also experienced in back-end development and database design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
