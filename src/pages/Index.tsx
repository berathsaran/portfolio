import { useEffect } from "react"
import { Header } from "@/components/Portfolio/Header"
import { HeroSection } from "@/components/Portfolio/HeroSection"
import { AboutSection } from "@/components/Portfolio/AboutSection"
import { SkillsSection } from "@/components/Portfolio/SkillsSection"
import { ProjectsSection } from "@/components/Portfolio/ProjectsSection"
import { CertificationsSection } from "@/components/Portfolio/CertificationsSection"
import { EducationSection } from "@/components/Portfolio/EducationSection"
import { ContactSection } from "@/components/Portfolio/ContactSection"
import { Footer } from "@/components/Portfolio/Footer"
import { FloatingParticles } from "@/components/FloatingParticles"

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
