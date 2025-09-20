import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science & Information Technology",
      institution: "Padmasri Dr. B.V. Raju Institute of Technology",
      location: "Hyderabad, India",
      duration: "2020 - 2024",
      grade: "8.81 CGPA",
      description: "Focused on core CS concepts like DSA and Software Engineering. Played an active role in the MUN club and organizing campus events.",
      achievements: [
        "Completed 400+ problems in data structures and frontend development",
        "Led a development team of 15+ students for a campus-wide project",
        "Served as Head Coordinator for a national-level technical fest"
      ],
      coursework: ["Data Structures", "Algorithms", "Database Systems", "Computer Networks", "Machine Learning", "Software Engineering"]
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "Sri Gayatri Junior College",
      location: "Hyderabad, India",
      duration: "2018 - 2020",
      grade: "93.2%",
      description: "Completed intermediate education with a focus on core science and math subjects. Built a strong foundation for engineering entrance exams.",
      achievements: [
        "Consistent academic performer in MPC stream",
        "Ranked in top 5% in statewide mock tests",
        "Participated in inter-college quiz and coding contests"
      ],
      coursework: ["Advanced Mathematics", "Physics", "Chemistry", "English"]
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      institution: "Vivekananda High School",
      location: "Hyderabad, India",
      duration: "2008 - 2018",
      grade: "9.5 GPA",
      description: "Completed primary and secondary schooling with distinction. Took early interest in technology and logical problem-solving.",
      achievements: [
        "Class topper in multiple academic years",
        "Won district-level science fair project",
        "Managed logistics for school-level academic and cultural events"
      ],
      coursework: ["Advanced Mathematics", "Physics", "Chemistry", "Computer Science", "English"]
    }
  ];

  const certifications = [
    {
      name: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2021",
      icon: "☁️"
    },
    {
      name: "AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services",
      date: "2021",
      icon: "🤖"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      icon: "🌐"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB",
      date: "2023",
      icon: "🍃"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous learning, from foundational computer science principles
            to cutting-edge technologies and industry certifications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full hidden lg:block"></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative lg:w-1/2 mb-12 lg:mb-20 animate-fade-up ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'
                }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-glow hidden lg:block"></div>

              <Card className="glass border-0 hover-glow group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="font-bold">
                      {edu.grade}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-6">{edu.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coursework */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-display font-bold text-center mb-12">
            Professional <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="glass border-0 hover-glow group text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <Badge variant="secondary" className="text-xs">
                    {cert.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;