import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-secondary/30 to-primary/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Berathsaran G P
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Front-End Developer | Cloud & Data Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building responsive web apps, serverless architectures & data-driven dashboards
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects" className="hover:bg-accent">View Projects</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
            <a href="https://github.com/berathsaran" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
            <a href="https://linkedin.com/in/berathsaran" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
            <a href="mailto:berathsaran@example.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
            <a href="tel:+1234567890">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="rounded-full hover:bg-accent"
          >
            <ArrowDown className="h-5 w-5" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>
      </div>
    </section>
  )
}