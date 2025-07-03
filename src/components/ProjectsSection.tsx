import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Viber.ai",
      description: "An automated AI app builder that streamlines the development process using React, Vite, and Python.",
      tech: ["React", "Vite", "Python", "AI"],
      github: "https://github.com/dhairyaveersingh/Viber.ai",
      featured: true,
      color: "primary"
    },
    {
      title: "CampusChat",
      description: "A video chat app like Omegle for college students to connect across campuses and foster school spirit.",
      tech: ["React", "WebRTC", "Node.js", "Socket.io"],
      github: "https://github.com/dhairyaveersingh/campus_chat",
      featured: true,
      color: "secondary"
    },
    {
      title: "Sentiment Analysis App",
      description: "Real-time multimodal sentiment analysis platform for brand improvement using advanced ML models.",
      tech: ["Python", "React", "Transformers", "ML"],
      github: "https://github.com/dhairyaveersingh/Sentiment-Analysis",
      featured: true,
      color: "accent"
    },
    {
      title: "Brain Tumor Segmentation",
      description: "Voxel-based segmentation of tumors using point clouds. Winner of ISEF Special Award.",
      tech: ["PyTorch", "U-Net", "Computer Vision", "Medical AI"],
      github: "#",
      award: "ISEF Special Awardee",
      featured: true,
      color: "primary"
    },
    {
      title: "SignTalk",
      description: "Accessibility technology for sign language recognition and translation.",
      tech: ["Computer Vision", "TensorFlow", "React"],
      github: "#",
      featured: false,
      color: "secondary"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my most impactful work in AI, web development, and accessibility
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="glass p-8 hover-lift group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  project.color === 'primary' ? 'from-primary/5 to-transparent' :
                  project.color === 'secondary' ? 'from-secondary/5 to-transparent' :
                  'from-accent/5 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.award && (
                      <Badge variant="secondary" className="ml-2 bg-accent/20 text-accent">
                        {project.award}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 hover:border-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                      className="hover:border-primary hover:text-primary"
                    >
                      View Code
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <Card 
                    key={project.title} 
                    className="glass p-6 hover-lift group"
                    style={{ animationDelay: `${(featuredProjects.length + index) * 0.1}s` }}
                  >
                    <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-xs"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      View Project
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <Card className="glass p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for additional projects, contributions, and experiments
              </p>
              <Button 
                variant="hero" 
                onClick={() => window.open('https://github.com/dhairyaveersingh', '_blank')}
              >
                Visit My GitHub
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
