export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#f8f9ff] to-[#e9eeff]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Experience
            </h2>
            <p className="text-gray-700">
              Combining expertise in Full Stack Development and Data Analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-display font-bold mb-4 text-gray-800">
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
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-display font-bold mb-4 text-gray-800">Education</h3>
                <div>
                  <h4 className="font-bold text-gray-800">VIT BHOPAL UNIVERSITY</h4>
                  <p className="text-gray-700">B.TECH. in Computer Science and Engineering</p>
                  <p className="text-sm text-gray-600">September 2022 - Present</p>
                  <p className="mt-2 text-sm text-gray-700">Specialization in Data Science and Machine Learning</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-display font-bold mb-4 text-gray-800">Certifications</h3>
                <div className="space-y-4">
                  {[
                    { name: "Applied Machine Learning in Python", date: "December 2023", org: "Coursera" },
                    { name: "Fundamentals of AI and ML", date: "May 2023", org: "IBM" },
                    { name: "Python Essential", date: "February 2023", org: "Cisco" }
                  ].map((cert, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-800">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.org}</p>
                      </div>
                      <span className="text-sm text-gray-600">{cert.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold mb-4 text-gray-800">Professional Experience</h3>
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
