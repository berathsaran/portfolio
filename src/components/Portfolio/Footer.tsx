import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo & Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Berathsaran G P
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Building the future, one line of code at a time. Let's create something amazing together.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4">
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
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase())
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hover:text-foreground transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
              <span>© {currentYear} Berathsaran G P. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}