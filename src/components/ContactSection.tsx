import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dhairya-veer-singh-637827215/",
      icon: "💼",
      description: "Professional Network"
    },
    {
      name: "GitHub", 
      url: "https://github.com/dhairyaveersingh",
      icon: "💻",
      description: "Code Portfolio"
    },
    {
      name: "Email",
      url: "mailto:dvsingh2@illinois.edu",
      icon: "✉️",
      description: "dvsingh2@illinois.edu"
    },
    {
      name: "Phone",
      url: "tel:+12179798994",
      icon: "📞",
      description: "+1 (217) 979-8994"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss opportunities, collaborations, or just connect over our shared passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-primary/20 focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-primary/20 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glass border-primary/20 focus:border-primary resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <Card className="glass p-8 hover-lift">
                <h3 className="text-2xl font-semibold mb-6 text-secondary">Let's Connect</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                  or simply connect with fellow technology enthusiasts. Whether you're a recruiter, 
                  researcher, or someone who shares a passion for AI and accessibility, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-2xl">{link.icon}</div>
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          {link.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="glass p-8 hover-lift">
                <h3 className="text-2xl font-semibold mb-6 text-accent">Current Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="font-medium">Open to Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="font-medium">Available for Internships</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full" />
                    <span className="font-medium">Research Collaborations Welcome</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> I typically respond to messages within 24-48 hours. 
                    For urgent matters, feel free to call or connect on LinkedIn.
                  </p>
                </div>
              </Card>

              {/* Resume Download */}
              <Card className="glass p-8 hover-lift text-center">
                <h3 className="text-xl font-semibold mb-4">Download Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my experience, skills, and achievements
                </p>
                <Button variant="outline" className="hover:border-primary hover:text-primary">
                  📄 Download PDF Resume
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;