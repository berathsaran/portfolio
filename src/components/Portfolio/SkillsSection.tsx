import { 
  Code, 
  Cloud, 
  Database, 
  BarChart3, 
  Globe, 
  Palette,
  Server,
  GitBranch,
  Container,
  Cpu
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "JavaScript", "HTML5", "CSS3", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Cloud Technologies",
    icon: Cloud,
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "Serverless", "CloudFormation"]
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: ["Power BI", "Data Visualization", "ETL", "SQL", "Analytics"]
  },
  {
    title: "Programming Languages",
    icon: Cpu,
    skills: ["Java", "Python", "JavaScript", "SQL"]
  },
  {
    title: "Development Tools",
    icon: GitBranch,
    skills: ["Git", "Docker", "VS Code", "MongoDB", "REST APIs"]
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skills: ["Responsive Design", "User Experience", "Component Libraries"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and cloud solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div 
                key={category.title}
                className="group bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elegant hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <IconComponent className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border/30 hover:bg-accent hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}