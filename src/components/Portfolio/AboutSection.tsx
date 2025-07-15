export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate Computer Science undergraduate with a deep enthusiasm for 
              <span className="text-primary font-medium"> front-end development</span>, 
              <span className="text-primary font-medium"> cloud technologies</span>, and 
              <span className="text-primary font-medium"> data analytics</span>. 
              My journey in technology is driven by the desire to create intuitive user experiences 
              and build scalable, efficient solutions that make a meaningful impact.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
              open-source projects, or diving deep into cloud architecture patterns. I believe in 
              continuous learning and love collaborating with fellow developers to bring innovative 
              ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}