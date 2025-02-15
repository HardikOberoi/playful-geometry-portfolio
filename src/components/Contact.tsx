export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#e9eeff] to-[#f8f9ff]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-700">
              Interested in working together? Let's discuss your project
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-purple-50/50 border border-purple-100 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-purple-50/50 border border-purple-100 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-purple-50/50 border border-purple-100 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
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
