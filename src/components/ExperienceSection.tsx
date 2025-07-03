import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Course Assistant",
      company: "University of Illinois at Urbana-Champaign",
      course: "CS124 Honors - Introduction to Computer Science",
      period: "Fall 2024 - Present",
      type: "Academic",
      description: "Mentoring students and managing team projects in computer science fundamentals.",
      achievements: [
        "Mentored 30+ students in programming fundamentals and problem-solving",
        "Led team project coordination for audio classification systems",
        "Designed and graded programming assignments and assessments",
        "Conducted office hours and debugging sessions"
      ],
      color: "secondary"
    },
    {
      title: "Software Engineer Intern",
      company: "Eli Lilly and Company",
      period: "Summer 2025",
      type: "Internship",
      description: "Contributed to healthcare technology solutions and pharmaceutical software systems.",
      achievements: [
        "Developed scalable software solutions for pharmaceutical applications",
        "Collaborated with cross-functional teams on critical healthcare projects",
        "Implemented robust testing and deployment strategies"
      ],
      color: "primary"
    },
    {
      title: "Research Assistant",
      company: "Centre for Development of Advanced Computing (C-DAC)",
      period: "2023 - 2023",
      type: "Research",
      description: "Led research projects in AI, computer vision, and accessibility technology.",
      achievements: [
        "Developed SignTalk - sign language recognition system",
        "Led brain tumor segmentation project using point clouds and U-Net",
        "Published research findings and presented at international conferences",
        "Collaborated with medical professionals on AI applications in healthcare"
      ],
      color: "accent"
    },
    {
      title: "IT Intern",
      company: "India Today Group",
      department: "LallanTop Digital Platform",
      period: "Summer 2023",
      type: "Internship",
      description: "Contributed to Android and web development for India's leading digital news platform.",
      achievements: [
        "Developed mobile app features for LallanTop platform",
        "Implemented responsive web design improvements",
        "Optimized application performance and user experience",
        "Collaborated with design and content teams"
      ],
      color: "primary"
    }
  ];

  const skills = [
    "Full-Stack Development",
    "Machine Learning",
    "Computer Vision",
    "Research & Development",
    "Team Leadership",
    "Project Management",
    "Technical Mentoring",
    "Healthcare Technology"
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Internship':
        return '💼';
      case 'Academic':
        return '🎓';
      case 'Research':
        return '🔬';
      default:
        return '🏢';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building expertise through diverse roles in technology, research, and development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title + exp.company}
                className="glass p-8 hover-lift group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  exp.color === 'primary' ? 'from-primary/5 to-transparent' :
                  exp.color === 'secondary' ? 'from-secondary/5 to-transparent' :
                  'from-accent/5 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{getTypeIcon(exp.type)}</span>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      <p className="text-lg font-semibold text-primary mb-1">
                        {exp.company}
                      </p>
                      {exp.course && (
                        <p className="text-muted-foreground text-sm mb-2">
                          {exp.course}
                        </p>
                      )}
                      {exp.department && (
                        <p className="text-muted-foreground text-sm mb-2">
                          {exp.department}
                        </p>
                      )}
                    </div>
                    <div className="text-right md:text-right mt-2 md:mt-0">
                      <Badge variant="secondary" className="text-sm">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Skills & Competencies */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-secondary flex items-center space-x-2">
                <span>🚀</span>
                <span>Core Competencies</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-muted/30 hover:bg-secondary/10 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-accent flex items-center space-x-2">
                <span>📈</span>
                <span>Impact Summary</span>
              </h3>
              <div className="space-y-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Students Mentored</div>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Research Projects Led</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Major Organizations</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;