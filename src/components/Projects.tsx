import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import tomato from '@/assets/tomato-app.jpg';
import chatbot from '@/assets/medical-chatbot.jpg';
import handpose from '@/assets/handpose-detection-app.jpg';
import prescripto from '@/assets/prescripto-appointment-app.jpg';
import porfolio from '@/assets/portfolio-web.jpg';
import iotproject from '@/assets/iot.jpg';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Tomato Food Delivery App (MERN)",
      description: "A full-stack food delivery platform built with the MERN stack and integrated with Stripe for seamless payments. Includes a user-facing app, admin dashboard, secure backend API, and a responsive UI for an enhanced food ordering experience.",
      image: tomato,
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Mongoose"],
      liveUrl: "https://food-del-frontend-cfck.onrender.com/",
      githubUrl: "https://github.com/Gdhanush-13/Food-del",
      featured: true
    },
    {
      title: "Medical Chatbot with N-Gram & TF-IDF",
      description:
        "An advanced medical chatbot that leverages NLP techniques like N-Gram and TF-IDF for accurate symptom extraction and disease prediction using Random Forest and CNN models. Features include speech-to-text, personalized medical guidance, and real-time predictions.",
      image: chatbot,
      tech: ["Python", "Scikit-learn", "TensorFlow", "Keras", "N-Gram", "TF-IDF", "Random Forest", "CNN", "Speech Recognition"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/Enhancing-medical-chatbot-accuracy-through-N---gram-and-TF-IDF-Analysis-of-symptom-data",
      featured: true
    },
    {
      title: "Prescripto Appointment App (MERN)",
      description:
        "A full-stack medical appointment platform built using the MERN stack (MongoDB, Express, React, Node.js). Users can browse doctors, book appointments, and manage profiles, while admins can manage doctor availability, appointments, and dashboard analytics. Features include JWT authentication, responsive UI, and secure API endpoints.",
      image: prescripto,
      tech: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "Axios", "Cloudinary", "Admin Panel"],
      liveUrl: "https://prescripto-appointment.onrender.com/",
      githubUrl: "https://github.com/Gdhanush-13/Prescripto-Appointment",
      featured: true
    },
    {
      title: "HandPose Detection App",
      description: "A real-time hand pose detection application built with React.js and TensorFlow.js, leveraging MediaPipe's hand tracking model. The app captures webcam input to detect and visualize hand landmarks, enabling interactive gesture-based control for web applications.",
      image: handpose,
      tech: ["React.js", "TensorFlow.js", "MediaPipe", "Webcam API", "JavaScript"],
      liveUrl: "https://handpose-detection-app.onrender.com/",
      githubUrl: "https://github.com/Gdhanush-13/HandPose-Detection-App",
      featured: true
    },
    {
      title: "AI Chat Assistant",
      description: "An intelligent chat assistant with natural language processing, context awareness, and multi-language support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["React", "Python", "FastAPI", "OpenAI", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Automated Room Light Controller with Visitor Counter",
      description: "An Arduino-based project that uses IR sensors to count people entering and leaving a room, automatically turning the lights on or off based on occupancy. The current count is displayed in real-time.",
      image: iotproject,
      tech: ["Arduino Uno", "IR Sensors", "C/C++","IoT"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/IOT-Automated-Room-Light-Controller-with-Visitor-Counter",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Chart.js", "OpenWeather API", "CSS Grid"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "An analytics dashboard for social media managers with real-time metrics, engagement tracking, and automated reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "D3.js", "Express", "MongoDB", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Modern Developer Portfolio",
      description: "A comprehensive portfolio website showcasing skills, experience, and projects with smooth animations, dark mode toggle, and fully responsive design built with modern web technologies.",
      image: porfolio,
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "Radix UI"],
      liveUrl: "https://dhanush-dev.vercel.app/",
      githubUrl: "https://github.com/Gdhanush-13/my-portfolio",
      featured: false
    }    
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const ProjectCard = ({ project, index, featured = false }: { project: any; index: number; featured?: boolean }) => (
    <Card
      className={`group overflow-hidden border-0 hover-glow glass transition-all duration-300 animate-fade-up ${featured ? 'lg:col-span-2' : ''
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 p-2 object-contain bg-background transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="secondary" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="secondary" className="h-8 w-8">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="p-1 h-auto text-xs flex items-center gap-1 hover-glow  duration-200">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="p-1 h-auto text-xs flex items-center gap-1 white hover-glow duration-200">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Live
                </Button>
              </a>
            )}
          </div>
          <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${hoveredProject === index ? 'translate-x-1 text-primary' : 'text-muted-foreground'
            }`} />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, from complex full-stack applications to
            beautiful frontend experiences. Each project represents a unique challenge solved.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 animate-fade-up">✨ Featured Work</h3>
          <div className="grid lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                featured={true}
              />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            🚀 More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + featuredProjects.length}
              />
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a href="https://github.com/Gdhanush-13" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="hover-glow">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
