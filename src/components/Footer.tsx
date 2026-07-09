import { Heart, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-10 px-4 sm:px-8 md:py-12 border-t border-border/50 relative">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors hover-glow"
      >
        <ArrowUp className="h-5 w-5 text-primary" />
      </button>

      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Dhanush</h3>
            <p className="text-muted-foreground">Full-Stack Engineer & AI Builder</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/Gdhanush-13" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:text-primary hover-glow transition-all">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/dhanush-guddala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:text-primary hover-glow transition-all">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:dhanushdhanu1300@gmail.com" aria-label="Send email"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:text-primary hover-glow transition-all">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Quote */}
          <figure className="mb-8">
            <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
              "Code is like humor. When you have to explain it, it is bad."
            </blockquote>
            <figcaption className="text-sm text-muted-foreground mt-2">-- Cory House</figcaption>
          </figure>

          {/* Love & Coffee */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-8">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and lots of</span>
            <Coffee className="h-4 w-4 text-amber-600 animate-bounce" />
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>&#169; {currentYear} Dhanush. All rights reserved.</p>
            <p className="mt-2">Built with React, Tailwind CSS, and modern web technologies.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;