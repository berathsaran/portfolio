import { GraduationCap, Code, Briefcase } from "lucide-react"

export function AboutSection() {
  const quickInfoCards = [
    {
      icon: GraduationCap,
      title: "B.E. CSE 2026",
      subtitle: "Computer Science & Engineering"
    },
    {
      icon: Code,
      title: "Frontend + Cloud",
      subtitle: "React, AWS"
    },
    {
      icon: Briefcase,
      title: "4+ Projects Built",
      subtitle: "Web apps & ML models"
    }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-primary p-1 shadow-elegant">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpg" // Make sure this image is in your public folder
                    alt="Berathsaran G P"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float"></div>
            </div>
          </div>

          {/* Bio & Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate Computer Science undergraduate with a deep enthusiasm for 
                <span className="text-primary font-medium"> front-end development</span>, 
                <span className="text-primary font-medium"> cloud technologies</span>, and 
                <span className="text-primary font-medium"> data analytics</span>. 
                My journey in technology is driven by the desire to create intuitive user experiences 
                and build scalable, efficient solutions that make a meaningful impact.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
                open-source projects, or diving deep into cloud architecture patterns. I believe in 
                continuous learning and love collaborating with fellow developers to bring innovative 
                ideas to life.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickInfoCards.map((card, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}