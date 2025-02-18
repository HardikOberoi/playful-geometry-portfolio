
import { Navbar } from "@/components/Navbar";

const mockResponses = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "Great portfolio! Would love to discuss potential collaboration.",
    date: "2024-03-15"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Your work on the FABRECYCLE project is impressive. Are you available for freelance work?",
    date: "2024-03-14"
  }
];

const Feedback = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 pb-20 section-highlight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#DB2777] bg-clip-text text-transparent hover-white-glow">
              Feedback
            </h1>
            
            <div className="space-y-6">
              {mockResponses.map((response) => (
                <div 
                  key={response.id}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white font-medium">{response.name}</h3>
                      <p className="text-white/60 text-sm">{response.email}</p>
                    </div>
                    <span className="text-white/40 text-sm">{response.date}</span>
                  </div>
                  <p className="text-white/80">{response.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
