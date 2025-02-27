
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          message: formData.message
        }]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 section-contact section-highlight">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent hover-white-glow">
              Get in Touch
            </h2>
            <p className="text-white/70 hover-white-glow">
              Interested in working together? Let's discuss your project
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-white-glow animated-border mb-16">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#9b87f5]/20 focus:border-[#9b87f5] transition-all duration-300 text-white hover-white-glow animated-border"
                  placeholder="Your message"
                />
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-10 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
