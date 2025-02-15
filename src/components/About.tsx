
export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Skills & Experience
            </h2>
            <p className="text-gray-600">
              Full Stack Developer with expertise in modern web technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  <Skill>C/C++</Skill>
                  <Skill>Java</Skill>
                  <Skill>Python</Skill>
                  <Skill>JavaScript</Skill>
                  <Skill>React.JS</Skill>
                  <Skill>Node.JS</Skill>
                  <Skill>AWS</Skill>
                  <Skill>Spring</Skill>
                  <Skill>Angular</Skill>
                  <Skill>SQL</Skill>
                  <Skill>HTML/CSS</Skill>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">VIT BHOPAL UNIVERSITY</h4>
                    <p className="text-gray-600">B.TECH. in Computer Science and Engineering</p>
                    <p className="text-sm text-gray-500">September 2022 - Present</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-bold mb-4">Certifications</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-bold">Applied Machine Learning in Python</h4>
                    <p className="text-sm text-gray-500">December 2023</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Fundamentals of AI and ML</h4>
                    <p className="text-sm text-gray-500">May 2023</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Python Essential</h4>
                    <p className="text-sm text-gray-500">February 2023</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold mb-4">Work Experience</h3>
              
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
  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
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
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h4 className="font-bold text-lg">{title}</h4>
    <p className="text-primary font-medium">{company}</p>
    <p className="text-sm text-gray-500 mb-4">{period}</p>
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="text-gray-600 text-sm">
          • {achievement}
        </li>
      ))}
    </ul>
  </div>
);
