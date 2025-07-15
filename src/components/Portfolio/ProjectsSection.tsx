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
    liveUrl: "https://demo.example.com",
    color: "text-blue-500"
  },
  {
    title: "AI-Driven BI Dashboard",
    description: "Interactive business intelligence dashboard with AI-powered insights and predictive analytics. Built with Power BI and Python backend for real-time data processing.",
    techStack: ["Power BI", "Python", "SQL", "Azure", "Machine Learning"],
    icon: BarChart3,
    githubUrl: "https://github.com/berathsaran/ai-dashboard",
    liveUrl: "https://dashboard.example.com",
    color: "text-green-500"
  },
  {
    title: "Music Preference Predictor",
    description: "Machine learning model that predicts music preferences based on user behavior and listening patterns. Utilizes collaborative filtering and content-based algorithms.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Flask", "MongoDB"],
    icon: Music,
    githubUrl: "https://github.com/berathsaran/music-predictor",
    liveUrl: "https://music-ai.example.com",
    color: "text-purple-500"
  },
  {
    title: "React Input Display App",
    description: "Modern React application demonstrating advanced form handling, real-time validation, and dynamic UI updates. Features responsive design and accessibility best practices.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod"],
    icon: Monitor,
    githubUrl: "https://github.com/berathsaran/react-input-app",
    liveUrl: "https://input-demo.example.com",
    color: "text-blue-600"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
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
                className="group hover:shadow-elegant hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <IconComponent className={`h-6 w-6 text-primary-foreground`} />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gradient-primary hover:opacity-90"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
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