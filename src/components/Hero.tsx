import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import profileImg from '@/assets/profile.jpg';

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Open Source Contributor",
  "AI/ML Enthusiast",
  "Problem Solver",
  "Tech Explorer"
];

const FLOAT_POSITIONS = [
  { left: '10%', top: '15%', delay: '0s', duration: '5s' },
  { left: '25%', top: '70%', delay: '1s', duration: '6s' },
  { left: '50%', top: '20%', delay: '2s', duration: '7s' },
  { left: '70%', top: '55%', delay: '0.5s', duration: '5.5s' },
  { left: '85%', top: '30%', delay: '1.5s', duration: '6.5s' },
  { left: '40%', top: '85%', delay: '3s', duration: '8s' },
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let typingSpeed = isDeleting ? 50 : 120;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {FLOAT_POSITIONS.map((pos, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full floating opacity-50"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.delay,
              animationDuration: pos.duration
            }}
          />
        ))}
      </div>

      {/* Main Content - SPLIT LAYOUT */}
      <div className="relative z-20 w-full px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen pt-28 pb-12">

        {/* LEFT: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 animate-fade-up">
          <p className="text-lg font-poppins font-medium text-primary tracking-wider">
            Hello there! 👋
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
            I'm <span className="gradient-text">Dhanush</span>
          </h1>

          {/* Dynamic Role */}
          <div className="h-12 flex items-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold flex items-center">
              <span className="gradient-text-secondary">I am a {typedText}</span>
              <span className="ml-1 w-[2px] h-7 bg-primary animate-blink"></span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            I build things that scale and ship. Software Engineer at RealPage, crafting enterprise
            React apps used by 500K+ users — and an AI builder in my own time, shipping production
            RAG systems, LLM tools, and vector search across finance and healthcare.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
            <Button
              size="lg"
              className="hover-glow font-poppins font-medium text-base px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover-glow font-poppins font-medium text-base px-8 py-3"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="hover-glow font-poppins font-medium text-base px-8 py-3"
              onClick={() => { const a = document.createElement('a'); a.href = '/resume.pdf'; a.download = 'Dhanush_Guddala_Resume.pdf'; a.click(); }}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 w-full justify-center lg:justify-start">
            <a href="https://github.com/Gdhanush-13" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github className="h-6 w-6 hover:text-primary transition" />
            </a>
            <a href="https://www.linkedin.com/in/dhanush-guddala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Linkedin className="h-6 w-6 hover:text-primary transition" />
            </a>
            <a href="mailto:dhanushdhanu1300@gmail.com" aria-label="Send email">
              <Mail className="h-6 w-6 hover:text-primary transition" />
            </a>
            <a href="https://leetcode.com/u/Dhanush-13/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile">
              <Code className="h-6 w-6 hover:text-primary transition" />
            </a>
          </div>
        </div>

        {/* RIGHT: Profile Photo */}
        <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Decorative glow behind photo */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-purple-500/30 blur-2xl scale-110" />
            {/* Gradient border frame */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-2xl bg-gradient-to-br from-primary via-primary/60 to-purple-500 p-[2px] shadow-glow">
              <img
                src={profileImg}
                alt="Dhanush Guddala"
                className="w-full h-full rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator — positioned at bottom center */}
        <button
          onClick={scrollToNext}
          className="animate-bounce z-30 absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-poppins text-muted-foreground">Scroll Down</span>
            <ChevronDown className="h-6 w-6 text-primary" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
