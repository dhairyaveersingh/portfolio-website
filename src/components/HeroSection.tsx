import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentCommand, setCurrentCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const commands = [
    "Building innovative AI solutions...",
    "ISEF Grand Award Winner ($7,500)",
    "Perfect 4.0 GPA at UIUC",
    "Software Engineer @ Eli Lilly",
    "Specializing in accessibility tech",
    "Ready to make an impact!"
  ];

  useEffect(() => {
    let commandIndex = 0;
    let charIndex = 0;
    const typeSpeed = 80;
    const pauseTime = 2500;

    const type = () => {
      if (commandIndex < commands.length) {
        if (charIndex < commands[commandIndex].length) {
          setCurrentCommand(commands[commandIndex].substring(0, charIndex + 1));
          charIndex++;
          setTimeout(type, typeSpeed);
        } else {
          setTimeout(() => {
            commandIndex++;
            charIndex = 0;
            if (commandIndex >= commands.length) {
              commandIndex = 0;
            }
            setCurrentCommand("");
            type();
          }, pauseTime);
        }
      }
    };

    type();

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Main heading with enhanced styling */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              <span className="gradient-text">Dhairya Veer Singh</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Software Developer & AI Researcher
          </p>
          
          {/* Enhanced terminal-style typing animation */}
          <div className="glass-card p-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-sm text-muted-foreground">terminal</div>
            </div>
            <div className="text-left font-mono text-lg h-8 flex items-center">
              <span className="text-accent mr-2">$</span>
              <span className="text-foreground">{currentCommand}</span>
              {showCursor && <span className="ml-1 w-3 h-6 bg-primary animate-pulse"></span>}
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Passionate about building innovative solutions at the intersection of AI, accessibility, and cutting-edge technology. 
            <span className="text-primary font-semibold"> ISEF Grand Awardee</span> with a track record of impactful research and development.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={scrollToProjects}
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto group"
            >
              <span>View My Work</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="text-lg px-8 py-4 w-full sm:w-auto border-2 hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Enhanced stats with better visual hierarchy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 hover-lift group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">$7,500</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">ISEF Grand Award</div>
              <div className="mt-2 text-xs text-accent">International Recognition</div>
            </div>
            
            <div className="glass-card p-8 hover-lift group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">4.0</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Perfect GPA</div>
              <div className="mt-2 text-xs text-accent">University of Illinois</div>
            </div>
            
            <div className="glass-card p-8 hover-lift group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Completed</div>
              <div className="mt-2 text-xs text-accent">AI & Web Development</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-muted-foreground">
          <div className="text-sm mb-2">Scroll to explore</div>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;