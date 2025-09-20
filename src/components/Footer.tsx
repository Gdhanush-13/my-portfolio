import { Heart, Coffee, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-8 md:py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">Dhanush</h3>
            <p className="text-muted-foreground">Results-Driven & Adaptable Professional</p>
          </div>

          {/* Quote */}
          <figure className="mb-8">
            <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <figcaption className="text-sm text-muted-foreground mt-2">– Cory House</figcaption>
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
            <p>© {currentYear} Dhanush. All rights reserved.</p>
            <p className="mt-2">
              Built with React, Tailwind CSS, and modern web technologies.
            </p>
          </div>

          {/* Easter Egg */}
          <div className="mt-8 text-xs text-muted-foreground/50">
            <p>
              🎯 Fun fact: This portfolio was crafted with precision, passion, and probably too much caffeine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;