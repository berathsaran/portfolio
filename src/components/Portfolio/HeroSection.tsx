import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1)_0%,_transparent_50%)] opacity-50"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-5xl mx-auto text-center space-y-12 z-10">
        {/* Profile Avatar */}
        <div className="w-32 h-32 mx-auto mb-8 relative animate-fade-in">
          <div className="w-full h-full rounded-full bg-gradient-primary p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img
                src="/profile.jpg" // Place your image in the public folder and use this path
                alt="Berathsaran G P"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Berathsaran G P
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Front-End Developer | Cloud deployment |ML Explorer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building responsive apps, serverless architectures, and AI dashboards
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant hover:shadow-glass hover:scale-105 px-8 py-3 text-lg font-semibold"
          >
            <a href="#contact">Contact Me</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 text-lg font-semibold hover:scale-105"
          >
            <a href="#projects">View Projects</a>
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
            <a href="https://linkedin.com/in/berathsaran-g-p" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
            <a href="mailto:berathoffl@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
            <a href="tel:+916383368813">
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