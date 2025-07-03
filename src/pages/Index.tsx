import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DotGrid from "@/components/ui/DotGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <DotGrid
        dotSize={6}
        gap={20}
        baseColor="#13294B"
        activeColor="#FF552E"
        proximity={120}
        shockRadius={200}
        shockStrength={3}
        resistance={800}
        returnDuration={1.2}
        className="fixed inset-0 z-0"
      />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
