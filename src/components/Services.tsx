import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios web modernos y aplicaciones web personalizadas con las últimas tecnologías",
      icon: "🚀"
    },
    {
      title: "Diseño UX/UI",
      description: "Experiencias de usuario intuitivas y diseños visuales que impactan y convierten",
      icon: "🎨"
    },
    {
      title: "Marketing Digital",
      description: "Estrategias completas de marketing digital para hacer crecer tu presencia online",
      icon: "📈"
    },
    {
      title: "Branding",
      description: "Identidad visual única que refleje la esencia de tu marca y conecte con tu audiencia",
      icon: "✨"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up">
            Nuestros <span className="gradient-primary bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto opacity-0 animate-fade-in-up">
            Ofrecemos soluciones integrales para llevar tu negocio al siguiente nivel digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow opacity-0 animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-2">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;