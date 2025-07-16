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
    <section id="skills" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">Technical Skills</h2>
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
                className="group glass-card rounded-xl p-6 shadow-card hover:shadow-glass hover:border-primary/30 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill}</span>
                        <span className="text-xs text-muted-foreground">
                          {85 + Math.floor(Math.random() * 15)}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${85 + Math.floor(Math.random() * 15)}%`,
                            animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
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