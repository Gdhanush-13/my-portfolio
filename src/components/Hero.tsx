import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

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

      {/* Main Content - FULL CENTER */}
      <div className="relative z-20 w-full px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto flex flex-col items-center justify-center text-center min-h-screen space-y-8">
        {/* Greeting */}
        <div className="animate-fade-up mt-24">
          <p className="text-lg font-poppins font-medium text-primary mb-2 tracking-wider">
            Hello there! 👋
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
            I'm <span className="gradient-text">Dhanush</span>
          </h1>
        </div>

        {/* Dynamic Role */}
        <div
          className="animate-fade-up h-16 flex items-center justify-center"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-semibold flex items-center">
            <span className="gradient-text-secondary">I am a {typedText}</span>
            <span className="ml-1 w-[2px] h-8 bg-primary animate-blink"></span>
          </div>
        </div>

        {/* About Me */}
        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up leading-relaxed"
          style={{ animationDelay: '0.4s' }}
        >
          Results-driven and adaptable professional with a strong commitment
          to excellence and a proven ability to deliver meaningful outcomes. Proactive
          and innovative, I thrive in dynamic environments, consistently exceeding
          expectations and contributing to impactful solutions that drive success.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
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
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-14 animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a href="https://github.com/Gdhanush-13" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 hover:text-primary transition" />
          </a>
          <a href="https://www.linkedin.com/in/dhanush-750bb0243/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 hover:text-primary transition" />
          </a>
          <a href="mailto:dhanushdhanu1300@gmail.com">
            <Mail className="h-6 w-6 hover:text-primary transition" />
          </a>
          <a href="https://leetcode.com/u/Dhanush-13/" target="_blank" rel="noopener noreferrer">
            <Code className="h-6 w-6 hover:text-primary transition" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce z-30 mt-8"
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
