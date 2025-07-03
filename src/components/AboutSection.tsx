import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    { name: "C++", level: 95, category: "Backend" },
    { name: "Python", level: 90, category: "Backend" },
    { name: "Machine Learning", level: 85, category: "AI/ML" },
    { name: "Tensorflow", level: 82, category: "AI/ML" },
    { name: "Node.js", level: 80, category: "Backend" },
  ];

  const interests = [
    { name: "Artificial Intelligence", icon: "🤖", description: "Deep learning & neural networks" },
    { name: "Accessibility Technology", icon: "♿", description: "Inclusive design solutions" }, 
    { name: "Computer Vision", icon: "👁️", description: "Image processing & recognition" },
    { name: "Full-Stack Development", icon: "💻", description: "End-to-end web applications" },
    { name: "Research & Innovation", icon: "🔬", description: "Scientific methodology & discovery" },
    { name: "Open Source", icon: "🌐", description: "Community-driven development" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating technology that makes a meaningful difference in people's lives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-8">
              <Card className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center">
                  <span className="mr-3">👨‍💻</span>
                  Who I Am
                </h3>
                <div className="space-y-4 text-base leading-relaxed">
                  <p>
                    I'm a Computer Science and Statistics Major at the <span className="text-primary font-semibold">University of Illinois at Urbana-Champaign</span>.                   I’m a passionate and technically driven engineer who thrives on solving complex problems with elegant, scalable solutions. My interests lie deep in systems-level programming, algorithmic optimization, and efficient data structures—anything that pushes the boundaries of performance and precision.
                  </p>
                  <p>
                    Currently serving as a <span className="text-primary font-semibold">CS Course Assistant</span> and AI researcher at the <span className="text-primary font-semibold">University of Illinois</span>. I enjoy blending computational thinking with real-world impact. I’m excited by opportunities that challenge me across the stack—from low-level memory management to high-level design strategy.
                  </p>
                </div>
              </Card>

              <Card className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center">
                  <span className="mr-3">🎯</span>
                  Focus Areas
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {interests.map((interest, index) => (
                    <div 
                      key={interest.name} 
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 group cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform">{interest.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {interest.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {interest.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Skills & Education */}
            <div className="space-y-8">
              <Card className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center">
                  <span className="mr-3">🎓</span>
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-semibold text-lg">University of Illinois at Urbana-Champaign</h4>
                    <p className="text-muted-foreground">B.S. Statistics & Computer Science</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-primary font-semibold">GPA: 3.9/4.0</span>
                      <span className="text-accent font-semibold">Dean's List</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Expected Graduation: 2027</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center">
                  <span className="mr-3">⚡</span>
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                            {skill.category}
                          </span>
                        </div>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-semibold mb-4 gradient-text flex items-center">
                  <span className="mr-3">💼</span>
                  Current Role
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-semibold">CS Course Assistant</h4>
                    <p className="text-muted-foreground">University of Illinois   •   Present</p>
                    <p className="text-sm mt-2">Mentoring students and managing team projects in advanced computer science coursework.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-semibold">Former Software Engineer Intern</h4>
                    <p className="text-muted-foreground">Eli Lilly and Company • 2025</p>
                    <p className="text-sm mt-2">Developed and optimized internal tools for data analysis and reporting using Python and SQL,  implemented CI/CD pipelines for scalable deployments.</p>
                  </div>
                  
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;