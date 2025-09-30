import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      category: "Desarrollo Web",
      description: "Plataforma de venta online con diseño responsive y checkout optimizado"
    },
    {
      title: "App Móvil Fintech",
      category: "UX/UI Design",
      description: "Aplicación bancaria móvil con interfaz intuitiva y seguridad avanzada"
    },
    {
      title: "Dashboard Analytics",
      category: "Desarrollo Web",
      description: "Panel de control con visualizaciones de datos en tiempo real"
    },
    {
      title: "Campaña Digital",
      category: "Marketing",
      description: "Estrategia integral que aumentó conversiones en un 340%"
    },
    {
      title: "Identidad Corporativa",
      category: "Branding",
      description: "Renovación completa de marca para startup tecnológica"
    },
    {
      title: "Plataforma SaaS",
      category: "Desarrollo Web",
      description: "Software empresarial escalable con arquitectura moderna"
    }
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 opacity-0 animate-fade-in-up">
            Nuestro <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto opacity-0 animate-fade-in-up px-4">
            Proyectos que demuestran nuestra pasión por la excelencia digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card group cursor-pointer opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="h-32 sm:h-40 bg-gradient-primary rounded-lg mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl sm:text-6xl opacity-50">🎯</div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-accent font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-xs sm:text-sm">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center opacity-0 animate-scale-in px-4">
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto">
            Ver Todos Los Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;