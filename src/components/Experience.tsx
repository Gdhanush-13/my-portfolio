import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Website Implementation Specialist",
      company: "RealPage India Pvt Ltd",
      location: "Hyderabad, India",
      period: "2024 – Present",
      type: "Full-time",
      description: "Leading frontend development for RealPage client portals, creating dynamic, responsive, and high-performance web interfaces using React.js, JavaScript, HTML5, and CSS3. Focused on seamless user experiences, fast load times, and accessibility compliance.",
      achievements: [
        "Boosted frontend performance by 30% via lazy loading, code splitting, and optimized resource management",
        "Designed and implemented fully responsive layouts with Tailwind CSS and Bootstrap across all devices",
        "Enhanced accessibility scores by applying WCAG standards and performing Lighthouse audits",
        "Delivered new features on tight deadlines by collaborating closely with cross-functional teams, maintaining high code quality"
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "REST APIs"]
    },
    {
      title: "Software Development Intern",
      company: "RealPage India Pvt Ltd",
      location: "Hyderabad, India",
      period: "2023 – 2024",
      type: "On-site Internship",
      description: "Contributed to migrating legacy frontend systems to modern React applications using RAUL UI. Built reusable and scalable components while following best practices and Agile workflows.",
      achievements: [
        "Migrated legacy JSP codebase to React.js, improving maintainability and reducing technical debt",
        "Developed reusable atomic components, reducing development time for new features by 25%",
        "Implemented unit testing and enforced code standards with Jest and React Testing Library, increasing reliability",
        "Optimized frontend performance and reduced bundle size via modular design and code refinement"
      ],
      technologies: ["React.js", "JavaScript", "JSP", "RAUL UI", "React Router", "React Hooks", "Jest", "ESLint"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Professional{' '}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My journey through various roles and the impact I've made along the way!
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="glass hover-glow transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-display mb-2 group-hover:text-primary transition-colors">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground/80">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="secondary" className="w-fit">
                      {experience.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <ExternalLink className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;