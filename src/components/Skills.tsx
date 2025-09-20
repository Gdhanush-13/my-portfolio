import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code2, Cloud, Server, Terminal } from 'lucide-react';

// TypeScript Interfaces
interface Skill {
  name: string;
  level: number;
  icon: string | JSX.Element;
}

interface SkillCategory {
  category: string;
  icon: JSX.Element;
  skills: Skill[];
}

interface ProgrammingLanguage {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "HTML5", level: 95, icon: "📄" },
        { name: "CSS3 / Tailwind", level: 90, icon: "🎨" },
        { name: "Bootstrap", level: 85, icon: "🅱️" },
        { name: "Next.js", level: 90, icon: "➡️" }
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚂" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "MySQL / PostgreSQL", level: 80, icon: "🐬" },
        { name: "REST APIs", level: 90, icon: "🔗" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Microsoft Azure", level: 80, icon: "☁️" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Git / GitHub", level: 95, icon: "🌿" },
        { name: "CI/CD Pipelines", level: 85, icon: "🔁" },
        { name: "VS Code", level: 95, icon: "🖥️" }
      ]
    }
  ];

  const programmingLanguages: ProgrammingLanguage[] = [
    { name: "JavaScript", level: 95, icon: "📜", color: "from-yellow-400 to-orange-500" },
    { name: "Java", level: 90, icon: "☕", color: "from-orange-500 to-red-500" },
    { name: "Python", level: 85, icon: "🐍", color: "from-blue-500 to-yellow-500" },
    { name: ".NET / C#", level: 85, icon: "💻", color: "from-purple-500 to-indigo-500" },
    { name: "C / C++", level: 80, icon: "⚡", color: "from-blue-600 to-gray-600" }
  ];

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
    <div
      className="group mb-6 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-sm font-bold text-primary">{skill.level}%</span>
      </div>
      <Progress
        value={skill.level}
        className={`h-3 transition-all duration-1000 ${hoveredSkill === skill.name ? 'shadow-glow' : ''}`}
        style={{ transitionDelay: `${index * 0.1}s` }}
      />
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated collection of technologies I've mastered through countless projects,
            late-night debugging sessions, and an insatiable curiosity for innovation.
          </p>
        </div>

        {/* Core Programming Languages */}
        <div className="mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              <Terminal className="w-6 h-6 inline-block mr-2" />
              Core Programming Languages
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {programmingLanguages.map((lang, index) => (
              <Card
                key={lang.name}
                className="glass border-0 hover-glow cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 0.12}s` }}
                onMouseEnter={() => setHoveredSkill(lang.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{lang.icon}</div>
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {lang.name}
                  </h4>
                  <div className="text-sm font-bold text-primary mb-2">{lang.level}%</div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${lang.color} transition-all duration-1000 ${hoveredSkill === lang.name ? 'shadow-glow' : ''}`}
                      style={{ width: `${lang.level}%`, transitionDelay: `${index * 0.12}s` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.category}
              className="glass border-0 hover-glow animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 0.2 + 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-2xl font-display font-bold gradient-text">
                    {category.category}
                  </h3>
                </div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-display font-bold mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              // Frontend
              "TypeScript", "Redux", "React Query", "Material UI", "Framer Motion",
              // Backend
              "JWT Authentication", "GraphQL", "Spring Boot", "Express.js", "Microservices", "WebSockets",
              // Testing
              "Jest", "Cypress", "React Testing Library",
              // Build/Tools
              "Webpack", "Vite", "ESLint", "Prettier", "Postman",
              // Deployment
              "Netlify", "Render", "Vercel", "Serverless"
            ].map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 hover-glow cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Terminal Mockup */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="glass border-0 overflow-hidden">
            <div className="bg-muted/50 px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-muted-foreground">dhanush@portfolio:~$</span>
            </div>
            <CardContent className="p-6 font-mono text-sm bg-card/50">
              <div className="space-y-2">
                <div className="text-green-400">$ npx create-awesome-project</div>
                <div className="text-muted-foreground">✨ Creating magical user experiences...</div>
                <div className="text-muted-foreground">🚀 Optimizing for performance...</div>
                <div className="text-muted-foreground">🎨 Applying beautiful design...</div>
                <div className="text-primary">✅ Project ready! Let's build something amazing.</div>
                <div className="text-green-400 animate-blink">▊</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;