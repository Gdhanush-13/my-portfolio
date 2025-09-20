import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CTA = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Dhanush_Resume.pdf'; // customize filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="glass border-primary/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
          
          <CardContent className="relative p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Ready to Build Something{' '}
                <span className="gradient-text">Amazing</span>?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's collaborate and bring your ideas to life. Whether it's a web application, 
                mobile app, or complex system architecture, I'm here to help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  onClick={handleContactClick}
                  className="hover-glow group"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Let's Start a Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleResumeDownload}
                  className="hover-glow"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;