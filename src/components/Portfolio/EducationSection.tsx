import { GraduationCap, Calendar, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Academic background and achievements
          </p>
        </div>

        <Card className="hover:shadow-elegant hover:border-primary/20 transition-all duration-300 border-border/50">
          <CardHeader className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-gradient-primary rounded-full">
                <GraduationCap className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <CardTitle className="text-2xl">Bachelor of Engineering</CardTitle>
              <p className="text-xl text-primary font-medium">Computer Science and Engineering</p>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">CGPA</h4>
                <p className="text-2xl font-bold text-primary">8.15</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">Graduation Year</h4>
                <p className="text-2xl font-bold text-primary">2026</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">Specialization</h4>
                <p className="text-lg font-medium text-muted-foreground">Software Engineering</p>
              </div>
            </div>

            <div className="bg-accent/50 rounded-lg p-6 mt-8">
              <h4 className="font-semibold mb-3 text-center">Relevant Coursework</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {["Data Structures", "Algorithms", "Database Systems", "Web Development", 
                  "Cloud Computing", "Machine Learning", "Software Engineering", "Computer Networks"].map((course) => (
                  <span 
                    key={course}
                    className="px-3 py-1 bg-background text-foreground text-sm rounded-full border border-border/30"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}