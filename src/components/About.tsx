import { Code, Coffee, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useGithubProfile } from '@/hooks/useGithubProfile';

const About = () => {
  const { publicRepos } = useGithubProfile();

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
            Software Engineer with 3+ years shipping full-stack React and Node.js applications
            at enterprise scale, with a growing specialization in AI engineering: RAG pipelines,
            LLM tooling, and vector databases. I care about clean architecture, code quality,
            and building products that actually work in production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div
              className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My coding journey began in college, but it truly took shape when I started building
                real-world applications during my internships and project work. Those early hands-on
                experiences sparked a strong passion for creating scalable and impactful web solutions.
              </p>
              <p>
                Today I work as a Software Engineer at RealPage, building enterprise-grade React
                applications used by property managers across the US. I own features end-to-end --
                from design handoff to production deployment -- collaborating across frontend, backend,
                and Azure DevOps.
              </p>
              <p>
                Outside of work, I’m constantly upskilling in areas like DevOps, Docker, Kubernetes,
                and AI engineering — building RAG pipelines with FastAPI, ChromaDB, and sentence-transformers,
                experimenting with LLMs (OpenAI, HuggingFace) for finance and healthcare assistants, and
                exploring DevOps workflows with Docker and Temporal.io.
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
                  <span className="font-bold text-primary">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-bold text-primary">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Technologies Mastered</span>
                  <span className="font-bold text-primary">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">GitHub Repositories</span>
                  <span className="font-bold text-primary">{publicRepos ?? '...'}</span>
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