import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentCommand, setCurrentCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const commands = [
    "Building innovative AI solutions...",
    "Computer Science Major at UIUC",
    "4.0 Major GPA/ 3.9 Overall GPA at UIUC",
    "Software Engineer",
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28">
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
            CS Major @ UIUC
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
            Sophomore Computer Science Major at the  
            <span className="text-primary font-semibold"> University of Illinois Urbana-Champaign</span>
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
              className="text-lg px-8 py-4 w-full sm:w-auto border-2 hover:border-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 hover:scale-105 transition-transform"
            >
              Get In Touch
            </Button>
          </div>

          {/* Enhanced stats with better visual hierarchy */}
          <div className="flex flex-row justify-center items-center gap-8 max-w-5xl mx-auto mb-24">
            {/* GitHub Card */}
            <a 
              href="https://github.com/dhairyaveersingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 hover-lift group rounded-full cursor-pointer block transition-all duration-300 hover:scale-110 w-24 h-24 mx-auto flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" fill="#bdb9b9" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/dhairya-veer-singh-637827215/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 hover-lift group rounded-full cursor-pointer block transition-all duration-300 hover:scale-110 w-24 h-24 mx-auto flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Spotify Card */}
            <a 
              href="https://open.spotify.com/user/a45itf2uv9e1hitrjoydicobr?si=8e9e5c883e53468a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 hover-lift group rounded-full cursor-pointer block transition-all duration-300 hover:scale-110 w-24 h-24 mx-auto flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" fill="#1DB954" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.420 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
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