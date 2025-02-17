export const Contact = () => {
  return (
    <section id="contact" className="py-20 section-contact section-highlight">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent hover-white-glow">
              Get in Touch
            </h2>
            <p className="text-white/70 hover-white-glow">
              Interested in working together? Let's discuss your project
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#9b87f5]/20 focus:border-[#9b87f5] transition-all duration-300 text-white hover-white-glow animated-border"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#9b87f5]/20 focus:border-[#9b87f5] transition-all duration-300 text-white hover-white-glow animated-border"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#9b87f5]/20 focus:border-[#9b87f5] transition-all duration-300 text-white hover-white-glow animated-border"
                  placeholder="Your message"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
