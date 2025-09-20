import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import ScheduleCallDialog from './ScheduleCallDialog';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ EmailJS send
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: 'Message sent successfully!',
        description:
          "Your message has entered my inbox galaxy. I'll get back to you soon! 🚀"
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Error sending message',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const viewPortfolio = () => {
    const section = document.querySelector("#projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Portfolio section not found!");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhanushdhanu1300@gmail.com",
      href: "mailto:dhanushdhanu1300@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9493675109",
      href: "tel:+919493675109"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Gdhanush-13",
      color: "hover:text-blue-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dhanush-750bb0243/",
      color: "hover:text-blue-400"
    },
    {
      icon: Code,
      label: "Leetcode",
      href: "https://leetcode.com/u/Dhanush-13/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Have a question or just want to say hi?
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="glass border-0 mb-8 animate-fade-up min-w-[300px] sm:min-w-[380px]" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass border-0 animate-fade-up min-w-[300px] sm:min-w-[380px]" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-bold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center transition-all hover-glow ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass border-0 animate-fade-up mt-6" style={{ animationDelay: '0.6s' }}>
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="glass border-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="glass border-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="glass border-0"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      required
                      className="glass border-0 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full hover-glow"
                  >
                    {isSubmitting ? (
                      "Sending message..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="glass border-0 p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a complete web application, a landing page that converts,
              or just want to discuss your ideas, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScheduleCallDialog>
                <Button size="lg" className="hover-glow">
                  Schedule a Call
                </Button>
              </ScheduleCallDialog>
              <Button variant="outline" size="lg" className="hover-glow" onClick={() => { viewPortfolio() }}>
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;