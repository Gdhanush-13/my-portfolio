import { ArrowRight, Award, Github, GitPullRequest, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useGithubProfile } from '@/hooks/useGithubProfile';

const OpenSource = () => {
  const { publicRepos } = useGithubProfile();

  const contributionHighlights = [
    {
      icon: GitPullRequest,
      title: 'Open Source Contributions',
      description:
        'Forked and contributed to major open source projects including next.js (Vercel), react-spectrum (Adobe), ant-design (Alibaba), typeorm, drizzle-orm, heroui, and formatjs.',
      tags: ['Next.js', 'React Spectrum', 'Ant Design', 'TypeORM']
    },
    {
      icon: Users,
      title: 'Shipped Across Full Stack & AI',
      description:
        'Built and shipped production-ready projects spanning React/Next.js frontends, Node.js/Express backends, and Python RAG pipelines — with live deployments on Vercel and Render.',
      tags: ['React', 'FastAPI', 'RAG', 'Python', 'TypeScript']
    },
    {
      icon: Award,
      title: 'GitHub Achievement Recognition',
      description:
        'Earned GitHub achievements including Quickdraw, Pull Shark, and Pair Extraordinaire for contribution quality and consistent open-source collaboration.',
      tags: ['Quickdraw', 'Pull Shark', 'Pair Extraordinaire']
    }
  ];

  return (
    <section id="open-source" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Open Source <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I actively share my work in public, collaborate through pull-request workflows,
            and build reusable projects that reflect real-world engineering practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contributionHighlights.map((item, index) => (
            <Card
              key={item.title}
              className="glass border-0 hover-glow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass rounded-xl p-8 animate-fade-up">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">{publicRepos ?? '...'}</p>
              <p className="text-sm text-muted-foreground mt-1">Public Repositories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground mt-1">GitHub Achievements</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">7+</p>
              <p className="text-sm text-muted-foreground mt-1">Major OSS Repos Forked</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">Active</p>
              <p className="text-sm text-muted-foreground mt-1">Open Source Profile</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <a href="https://github.com/Gdhanush-13" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="hover-glow">
              <Github className="mr-2 h-5 w-5" />
              Explore My GitHub Contributions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
