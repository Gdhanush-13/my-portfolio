import { Code, Coffee, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable code that others can understand and extend."
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Breaking down complex challenges into elegant, simple solutions."
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Always exploring new technologies and refining development workflows."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I’m a passionate technologist who believes in the power of clean code,
            thoughtful design, and seamless user experiences. My journey began with
            curiosity and has grown into a dedication to crafting meaningful digital
            solutions that create real impact. Driven by continuous learning and
            creativity, I strive to bring both innovation and clarity to everything I build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div
              className="space-y-4 text-muted-foreground leading-relaxed"
              style={{ textAlign: 'justify' }}>
              <p>
                My coding journey began in college, but it truly took shape when I started building
                real-world applications during my internships and project work. Those early hands-on
                experiences sparked a strong passion for creating scalable and impactful web solutions.
              </p>
              <p>
                Currently, I work as a Website Implementation Specialist at RealPage, where I specialize
                in delivering full-stack solutions using modern technologies like React, Node.js, and
                cloud platforms such as Azure. I thrive on bridging the gap between UI design, backend logic, and system architecture.
              </p>
              <p>
                Outside of work, I’m constantly upskilling in areas like DevOps, Docker, Kubernetes,
                and AI integration. I enjoy experimenting with new frameworks, building personal SaaS
                tools, and collaborating on innovative ideas that blend performance with user-centric design.
              </p>
            </div>
          </div>

          {/* Right Column - Stats/Facts */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Years of Experience</span>
                  <span className="font-bold text-primary">2+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-bold text-primary">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Technologies Mastered</span>
                  <span className="font-bold text-primary">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Coffee Cups Consumed</span>
                  <span className="font-bold text-primary">∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="hover-glow glass border-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <highlight.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;