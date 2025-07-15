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

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
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
  );
};

export default Index;
