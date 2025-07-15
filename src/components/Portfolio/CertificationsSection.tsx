import { Award, Cloud, Database, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    title: "AWS Associate-Level Training",
    issuer: "Amazon Web Services",
    icon: Cloud,
    description: "Comprehensive training in AWS cloud services including EC2, S3, Lambda, and VPC configuration",
    color: "text-orange-500"
  },
  {
    title: "MongoDB for Developers",
    issuer: "MongoDB University",
    icon: Database,
    description: "Advanced database design, query optimization, and application development with MongoDB",
    color: "text-green-600"
  },
  {
    title: "Java Programming",
    issuer: "Oracle",
    icon: Code,
    description: "Object-oriented programming fundamentals, data structures, and enterprise Java development",
    color: "text-red-500"
  }
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Professional certifications and training achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <Card 
                key={cert.title}
                className="text-center hover:shadow-elegant hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}