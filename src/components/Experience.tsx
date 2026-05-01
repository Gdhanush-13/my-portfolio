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
      description: "Driving frontend engineering for RealPage's enterprise property web experiences by building scalable, accessible, and performance-first interfaces that support high-traffic renter journeys and business-critical leasing workflows.",
      achievements: [
        "Developed and maintained responsive, accessible enterprise property websites using React.js, TypeScript, HTML5, and CSS3, serving 500K+ monthly users across 200+ CMS-driven pages",
        "Architected a reusable React component library of 40+ production-ready components using Atomic Design principles, accelerating feature delivery by around 30% across teams",
        "Integrated third-party platforms and backend services via REST APIs to power dynamic listings, real-time availability updates, and tenant-facing workflow continuity",
        "Improved Lighthouse performance scores by 25+ points by implementing memoization, lazy loading, code splitting, and image optimization guided by DevTools audits",
        "Standardized UI implementation patterns and frontend quality checks to improve consistency, reduce styling regressions, and streamline onboarding for new contributors",
        "Partnered with designers and product stakeholders to translate business requirements into polished, conversion-focused user journeys with strong mobile usability",
        "Collaborated in Agile sprint cycles with QA engineers and product owners, contributing to sprint planning, code reviews, demos, and retrospectives to ensure predictable on-time delivery",
        "Maintained clean Git workflows and release discipline with peer review and deployment readiness checks, resulting in stable and reliable production rollouts"
      ],
      technologies: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Atomic Design", "REST APIs", "Lighthouse", "DevTools", "Agile", "Git"]
    },
    {
      title: "Software Development Intern",
      company: "RealPage India Pvt Ltd",
      location: "Hyderabad, India",
      period: "2023 – 2024",
      type: "On-site Internship",
      description: "Contributed to the modernization of Marketing Center, RealPage's multifamily property marketing platform used by thousands of property managers to manage leads, listings, and renter engagement at scale.",
      achievements: [
        "Led the JSP-to-React migration for key UI modules by rebuilding legacy JavaServer Pages with 1:1 functional parity in a modern React and TypeScript architecture",
        "Built 20+ production-grade reusable UI components using React, TypeScript, and RAUL (RealPage Asset UI Library), ensuring design consistency across enterprise workflows",
        "Replicated complex JSP template behaviors into reusable React components while aligning implementation with WCAG accessibility and responsive design standards",
        "Wrote comprehensive Jest and React Testing Library test suites for migrated components, improving release confidence and reducing regression risk in bi-weekly deployments",
        "Collaborated in an Agile setup with backend engineers, QA, and senior developers across sprint planning, PR reviews, and cross-functional delivery",
        "Followed Git branching strategy, code review standards, and CI/CD practices to deliver clean, auditable, and deployment-ready code"
      ],
      technologies: ["React.js", "TypeScript", "JSP", "RAUL UI", "Jest", "React Testing Library", "WCAG", "CI/CD", "Agile", "Git"]
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