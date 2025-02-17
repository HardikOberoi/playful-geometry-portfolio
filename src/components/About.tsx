export const About = () => {
  return (
    <section id="about" className="py-20 section-about section-highlight">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#4ECDC4] via-[#45B7AF] to-[#2E8B84] bg-clip-text text-transparent hover-white-glow">
              Skills & Experience
            </h2>
            <p className="text-white/70 hover-white-glow">
              Combining expertise in Full Stack Development and Data Analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border">
                <h3 className="text-xl font-display font-bold mb-4 text-white">
                  Technical Expertise
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React.JS", "Node.JS", "Java", "Python", "AWS", "MongoDB"].map((skill) => (
                        <Skill key={skill}>{skill}</Skill>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Data & Analytics</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "Data Analysis", "Python", "SQL", "Visualization"].map((skill) => (
                        <Skill key={skill}>{skill}</Skill>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border">
                <h3 className="text-xl font-display font-bold mb-4 text-white">Education</h3>
                <div>
                  <h4 className="font-bold text-white">VIT BHOPAL UNIVERSITY</h4>
                  <p className="text-white/70">B.TECH. in Computer Science and Engineering</p>
                  <p className="text-sm text-white/60">September 2022 - Present</p>
                  <p className="mt-2 text-sm text-white/70">Specialization in Data Science and Machine Learning</p>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border">
                <h3 className="text-xl font-display font-bold mb-4 text-white">Certifications</h3>
                <div className="space-y-4">
                  {[
                    { name: "Applied Machine Learning in Python", date: "December 2023", org: "Coursera" },
                    { name: "Fundamentals of AI and ML", date: "May 2023", org: "IBM" },
                    { name: "Python Essential", date: "February 2023", org: "Cisco" }
                  ].map((cert, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-white">{cert.name}</h4>
                        <p className="text-sm text-white/60">{cert.org}</p>
                      </div>
                      <span className="text-sm text-white/60">{cert.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold mb-4 text-white">Professional Experience</h3>
              <div className="space-y-6">
                <ExperienceCard
                  title="FULL STACK DEVELOPER & DATA SPECIALIST"
                  company="NovaNectar"
                  period="July 2024 - August 2024"
                  achievements={[
                    "Developed and implemented data-driven features resulting in a 40% increase in user engagement",
                    "Engineered automated data processing pipelines reducing manual work by 60%",
                    "Created interactive dashboards for real-time performance monitoring",
                    "Optimized database queries leading to 66% faster response times"
                  ]}
                />
                
                <ExperienceCard
                  title="JAVA DEVELOPER"
                  company="Codsoft"
                  period="March 2024 - April 2024"
                  achievements={[
                    "Developed a server scripting framework automating entry of 200,000+ records",
                    "Implemented data validation and cleaning procedures improving data accuracy by 95%",
                    "Architected multi-layered application with Java, Python, and AWS Step Functions"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 bg-white/5 text-white/80 rounded-full text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors duration-300 hover-white-glow animated-border">
    {children}
  </span>
);

const ExperienceCard = ({
  title,
  company,
  period,
  achievements
}: {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}) => (
  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border">
    <h4 className="font-bold text-lg text-white">{title}</h4>
    <p className="text-primary font-medium">{company}</p>
    <p className="text-sm text-white/60 mb-4">{period}</p>
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="text-white/70 text-sm flex items-start gap-2">
          <span className="text-primary">•</span>
          {achievement}
        </li>
      ))}
    </ul>
  </div>
);
