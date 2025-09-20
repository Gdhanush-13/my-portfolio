import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "Tech Innovations Inc.",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Dhanush is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He transformed our user interface and significantly improved our application's performance."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "Digital Solutions Co.",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Working with Dhanush was a game-changer for our team. His technical expertise in React and Node.js helped us scale our platform efficiently. He's not just a developer, but a true technology partner."
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "StartupXYZ",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Dhanush bridges the gap between design and development beautifully. He understands user experience and translates designs into pixel-perfect, performant code. A pleasure to collaborate with."
    },
    {
      name: "David Park",
      role: "Engineering Manager",
      company: "InnovateLab",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Dhanush's ability to learn new technologies quickly and implement them effectively is impressive. He contributed significantly to our team's success and mentored junior developers excellently."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 sm:px-8 bg-gradient-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Client{' '}
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            What colleagues and clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass hover-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-primary/30 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed italic pl-6">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
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

export default Testimonials;