export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Experience
            </h2>
            <p className="text-gray-700">
              Full Stack Developer with expertise in modern web technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-display font-bold mb-4 text-gray-800">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {["C/C++", "Java", "Python", "JavaScript", "React.JS", "Node.JS", "AWS", "Spring", "Angular", "SQL", "HTML/CSS"].map((skill) => (
                    <Skill key={skill}>{skill}</Skill>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-display font-bold mb-4 text-gray-800">Education</h3>
                <div>
                  <h4 className="font-bold text-gray-800">VIT BHOPAL UNIVERSITY</h4>
                  <p className="text-gray-700">B.TECH. in Computer Science and Engineering</p>
                  <p className="text-sm text-gray-600">September 2022 - Present</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-display font-bold mb-4 text-gray-800">Certifications</h3>
                <div className="space-y-4">
                  {[
                    { name: "Applied Machine Learning in Python", date: "December 2023" },
                    { name: "Fundamentals of AI and ML", date: "May 2023" },
                    { name: "Python Essential", date: "February 2023" }
                  ].map((cert, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-gray-800">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold mb-4 text-gray-800">Work Experience</h3>
              <div className="space-y-6">
                <ExperienceCard
                  title="FULL STACK DEVELOPER"
                  company="NovaNectar"
                  period="July 2024 - August 2024"
                  achievements={[
                    "Streamlined development process with automated testing tools, reducing regression testing time by 60%",
                    "Engineered full-stack solutions improving user experience with 40% increase in engagement",
                    "Analyzed system performance metrics leading to 66% reduction in request handling time"
                  ]}
                />
                
                <ExperienceCard
                  title="JAVA DEVELOPER"
                  company="Codsoft"
                  period="March 2024 - April 2024"
                  achievements={[
                    "Developed a server scripting framework automating entry of 200,000+ records",
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
  <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 text-gray-800 rounded-full text-sm font-medium border border-purple-100 hover:border-purple-200 transition-colors duration-300">
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
  <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
    <h4 className="font-bold text-lg text-gray-800">{title}</h4>
    <p className="text-primary font-medium">{company}</p>
    <p className="text-sm text-gray-600 mb-4">{period}</p>
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
          <span className="text-primary">•</span>
          {achievement}
        </li>
      ))}
    </ul>
  </div>
);
