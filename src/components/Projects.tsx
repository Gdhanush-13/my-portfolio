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
import financeOS from '@/assets/finance-os.jpg';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Finance OS",
      description: "A full-stack personal finance management app built with Next.js 14 and Express 5 + MongoDB. Track accounts, plan budgets, hit savings goals, and visualize cashflow — all in one calm dashboard. Features JWT httpOnly cookie auth, silent token refresh, optimistic UI updates, CSV import/export, recurring transactions via node-cron, and a full test suite (Jest + Vitest).",
      image: financeOS,
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Recharts", "Express 5", "MongoDB", "Mongoose", "JWT", "Zod", "node-cron"],
      liveUrl: "https://finance-os-next.vercel.app/",
      githubUrl: "https://github.com/Gdhanush-13/finance-os",
      featured: true
    },
    {
      title: "AI Due Diligence Copilot",
      description: "A RAG platform that analyzes company filings, financial statements, investor presentations, and market reports to deliver source-backed risk assessments, growth opportunities, and executive summaries in seconds. Features semantic chunking, free embeddings via Sentence Transformers, persistent ChromaDB vector store, and structured AI output.",
      imageUrl: "https://opengraph.githubassets.com/1/Gdhanush-13/ai-due-diligence-copilot",
      tech: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "OpenAI GPT-4o-mini", "pypdf", "Vanilla JS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/ai-due-diligence-copilot",
      featured: true
    },
    {
      title: "RAG Doc Chatbot",
      description: "A full-stack Retrieval-Augmented Generation application. Upload any PDF, TXT, or Markdown file and ask questions — answers are grounded in your documents with source citations. Features semantic chunking with sliding window overlap, free embeddings, persistent ChromaDB store, and a clean React chat UI with dark mode and drag-and-drop upload.",
      imageUrl: "https://opengraph.githubassets.com/1/Gdhanush-13/rag-doc-chatbot",
      tech: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "OpenAI", "React 18", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/rag-doc-chatbot",
      featured: true
    },
    {
      title: "Medical Chatbot with N-Gram & TF-IDF",
      description: "An advanced medical chatbot that leverages NLP techniques like N-Gram and TF-IDF for accurate symptom extraction and disease prediction using Random Forest and CNN models. Features include speech-to-text, personalized medical guidance, and real-time predictions.",
      image: chatbot,
      tech: ["Python", "Scikit-learn", "TensorFlow", "Keras", "N-Gram", "TF-IDF", "Random Forest", "CNN", "Speech Recognition"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/Enhancing-medical-chatbot-accuracy-through-N---gram-and-TF-IDF-Analysis-of-symptom-data",
      featured: true
    },
    {
      title: "Healthcare Knowledge Navigator",
      description: "A medical RAG assistant that retrieves and synthesizes information from clinical guidelines, research papers, and treatment protocols. Delivers evidence-based answers with evidence-level classification (RCT > Cohort > Case report), confidence scoring, and source citations.",
      imageUrl: "https://opengraph.githubassets.com/1/Gdhanush-13/healthcare-knowledge-navigator",
      tech: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "OpenAI GPT-4o-mini", "pypdf", "Vanilla JS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/healthcare-knowledge-navigator",
      featured: false
    },
    {
      title: "Inbox Action Agent",
      description: "AI agent that reads your inbox and acts on it. Plans multi-step tasks, calls Gmail/Calendar/File tools, requests human approval for destructive actions, and retries on failures — all orchestrated via a LangGraph ReAct state machine with PostgreSQL task logging.",
      imageUrl: "https://opengraph.githubassets.com/1/Gdhanush-13/inbox-action-agent",
      tech: ["Python", "FastAPI", "LangGraph", "OpenAI", "Gmail API", "Google Calendar API", "PostgreSQL", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/inbox-action-agent",
      featured: false
    },
    {
      title: "LLM Eval Bench",
      description: "Automated LLM evaluation framework. Benchmark prompts across models, detect hallucinations with LLM-as-judge, track quality metrics (Exact Match, Token F1, Sequence Similarity) over time, and version your prompts — all via REST API with Langfuse observability.",
      imageUrl: "https://opengraph.githubassets.com/1/Gdhanush-13/llm-eval-bench",
      tech: ["Python", "FastAPI", "OpenAI", "Anthropic Claude", "PostgreSQL", "Langfuse", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/llm-eval-bench",
      featured: false
    },
    {
      title: "Support Docs Copilot",
      description: "Production-grade RAG documentation assistant. Ask natural language questions over your docs and get grounded, cited answers with conversation memory — powered by Qdrant hybrid search (Dense + BM25 + RRF), Redis session history, and GPT-4o-mini.",
      imageUrl: "https://opengraph.githubassets.com/1/Gdhanush-13/support-docs-copilot",
      tech: ["Python", "FastAPI", "LangChain", "Qdrant", "OpenAI", "Redis", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/support-docs-copilot",
      featured: false
    },
    {
      title: "AI Release Pipeline",
      description: "LLMOps service for model versioning, A/B traffic splitting, and staged rollouts. Features a model registry with promotion stages (staging/production), configurable A/B experiment framework with deterministic routing, and experiment lifecycle management.",
      imageUrl: "https://opengraph.githubassets.com/1/Gdhanush-13/ai-release-pipeline",
      tech: ["Python", "FastAPI", "Pydantic", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/ai-release-pipeline",
      featured: false
    },
    {
      title: "Guardrails AI",
      description: "Safety layer for LLM inputs and outputs. Detects PII (email, phone, SSN, credit card), prevents prompt injection attacks, enforces content policies, and supports custom regex policy management — all exposed via a simple REST API.",
      imageUrl: "https://opengraph.githubassets.com/1/Gdhanush-13/guardrails-ai",
      tech: ["Python", "FastAPI", "Pydantic", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/guardrails-ai",
      featured: false
    },
    {
      title: "Domain Reply Tuner",
      description: "Fine-tuning pipeline for training domain-specific reply models using OpenAI's fine-tuning API. Handles JSONL training data preparation and validation, fine-tuning job submission and monitoring, and dataset management via REST API.",
      imageUrl: "https://opengraph.githubassets.com/1/Gdhanush-13/domain-reply-tuner",
      tech: ["Python", "FastAPI", "OpenAI SDK", "Pydantic", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/domain-reply-tuner",
      featured: false
    },
    {
      title: "HandPose Detection App",
      description: "A real-time hand pose detection application built with React.js and TensorFlow.js, leveraging MediaPipe's hand tracking model. The app captures webcam input to detect and visualize hand landmarks, enabling interactive gesture-based control for web applications.",
      image: handpose,
      tech: ["React.js", "TensorFlow.js", "MediaPipe", "Webcam API", "JavaScript"],
      liveUrl: "https://handpose-detection-app.onrender.com/",
      githubUrl: "https://github.com/Gdhanush-13/HandPose-Detection-App",
      featured: false
    },
    {
      title: "Tomato Food Delivery App (MERN)",
      description: "A full-stack food delivery platform built with the MERN stack and integrated with Stripe for seamless payments. Includes a user-facing app, admin dashboard, secure backend API, and a responsive UI for an enhanced food ordering experience.",
      image: tomato,
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Mongoose"],
      liveUrl: "https://food-del-frontend-cfck.onrender.com/",
      githubUrl: "https://github.com/Gdhanush-13/Food-del",
      featured: false
    },
    {
      title: "Prescripto Appointment App (MERN)",
      description: "A full-stack medical appointment platform built using the MERN stack. Users can browse doctors, book appointments, and manage profiles, while admins can manage doctor availability, appointments, and dashboard analytics. Features JWT authentication and secure API endpoints.",
      image: prescripto,
      tech: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "Axios", "Cloudinary"],
      liveUrl: "https://prescripto-appointment.onrender.com/",
      githubUrl: "https://github.com/Gdhanush-13/Prescripto-Appointment",
      featured: false
    },
    {
      title: "Automated Room Light Controller",
      description: "An Arduino-based project that uses IR sensors to count people entering and leaving a room, automatically turning the lights on or off based on occupancy. The current count is displayed in real-time.",
      image: iotproject,
      tech: ["Arduino Uno", "IR Sensors", "C/C++", "IoT"],
      liveUrl: "#",
      githubUrl: "https://github.com/Gdhanush-13/IOT-Automated-Room-Light-Controller-with-Visitor-Counter",
      featured: false
    },
    {
      title: "Modern Developer Portfolio",
      description: "A comprehensive portfolio website showcasing skills, experience, and projects with smooth animations, dark mode toggle, and fully responsive design built with modern web technologies.",
      image: porfolio,
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Radix UI", "shadcn/ui"],
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
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 p-2 object-contain bg-background transition-transform duration-300 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-100 transition-opacity duration-300">
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
