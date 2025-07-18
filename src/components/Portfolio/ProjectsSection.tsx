import { ExternalLink, Github, Cloud, BarChart3, Music, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Serverless Web Hosting with AWS",
    description: "A scalable, cost-effective web hosting solution using AWS Lambda, S3, and CloudFront. Features automatic scaling, global CDN distribution, and minimal operational overhead.",
    techStack: ["AWS Lambda", "S3", "CloudFront", "Route 53", "Terraform"],
    icon: Cloud,
    githubUrl: "https://github.com/berathsaran/serverless-hosting",
    color: "text-blue-500"
  },
  {
    title: "AI-Driven BI Dashboard",
    description: "Interactive business intelligence dashboard with AI-powered insights and predictive analytics. Built with Power BI and Python backend for real-time data processing.",
    techStack: ["Power BI", "Python", "SQL", "Machine Learning"],
    icon: BarChart3,
    githubUrl: "https://github.com/berathsaran/ai-dashboard",
    color: "text-green-500"
  },
  {
    title: "Music Preference Predictor",
    description: "Machine learning model that predicts music preferences based on user behavior and listening patterns. Utilizes collaborative filtering and content-based algorithms.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Flask", "MongoDB"],
    icon: Music,
    githubUrl: "https://github.com/berathsaran/music-predictor",
    color: "text-purple-500"
  },
  {
    title: "Portfolio Website in React",
    description: "Personal portfolio built with React and TypeScript, featuring a modern UI, responsive design, and smooth animations. Showcases projects, skills, and contact information.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: Monitor,
    githubUrl: "https://github.com/berathsaran/portfolio-react",
    color: "text-blue-600"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, cloud architecture, and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card 
                key={project.title}
                className="group hover:shadow-glass hover:border-primary/30 transition-all duration-500 hover:scale-105 border-border/50 overflow-hidden glass-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-primary/60" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>

                <CardHeader className="space-y-4">
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>View on GitHub</span>
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      asChild
                      className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300"
                    >
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}