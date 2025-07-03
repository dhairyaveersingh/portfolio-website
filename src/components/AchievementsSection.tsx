
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "ISEF Grand Award",
      organization: "International Science and Engineering Fair",
      amount: "$7,500",
      year: "2024",
      description: "Recognized for outstanding research in AI and computer vision for medical applications",
      type: "research"
    },
    {
      title: "IRIS National Fair Grand Prize",
      organization: "IRIS National Science Fair",
      year: "2023",
      description: "National recognition for innovative research project",
      type: "research"
    },
    {
      title: "Intel OneAPI Hackathon Finalist",
      organization: "Intel Corporation",
      year: "2023",
      description: "First place for developing innovative solutions using Intel's OneAPI toolkit",
      type: "hackathon"
    },
    {
      title: "Dean's List",
      organization: "University of Illinois at Urbana-Champaign",
      year: "2025-Present",
      description: "Consistent academic excellence with 4.0 GPA for the current semester.",
      type: "academic"
    }
  ];

  const hackathons = [
    { name: "Intel OneAPI Hackathon", place: "Finalist" },
    { name: "HackIllinois", place: "Finalist" },
    { name: "PennApps", place: "Finalist" },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'research':
        return '🔬';
      case 'hackathon':
        return '💻';
      case 'academic':
        return '🎓';
      default:
        return '🏆';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Awards and recognition for innovation, research, and academic excellence
            </p>
          </div>

          {/* Major Achievements */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="p-6 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-2xl">{getIcon(achievement.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {achievement.year}
                      </Badge>
                    </div>
                    <p className="text-primary font-semibold mb-1">
                      {achievement.organization}
                    </p>
                    {achievement.amount && (
                      <p className="text-muted-foreground font-medium mb-3">
                        Award: {achievement.amount}
                      </p>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Hackathon Wins & Stats */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                Hackathon Victories
              </h3>
              <div className="space-y-4">
                {hackathons.map((hackathon) => (
                  <div key={hackathon.name} className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium">{hackathon.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {hackathon.place}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                Key Metrics
              </h3>
              <div className="space-y-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">$7,500</div>
                  <div className="text-sm text-muted-foreground">ISEF Grand Award</div>
                </div>
                
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">4.0</div>
                  <div className="text-sm text-muted-foreground">Perfect GPA</div>
                </div>
                
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Awards & Recognition</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quote */}
          <div className="text-center mt-16">
            <Card className="p-8 max-w-4xl mx-auto">
              <blockquote className="text-lg italic text-center">
                "Innovation comes from combining technical expertise with a deep understanding of real-world problems. 
                Every award motivates me to push boundaries and create technology that makes a meaningful impact."
              </blockquote>
              <div className="mt-4 text-sm text-muted-foreground">
                — Someone, prolly...
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
