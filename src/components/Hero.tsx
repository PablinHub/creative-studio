import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 opacity-0 animate-fade-in-up">
          Creamos Experiencias
          <span className="block gradient-text mt-2">
            Digitales Únicas
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-6 sm:mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up px-4">
          Transformamos ideas innovadoras en soluciones digitales impactantes que conectan con tu audiencia
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-0 animate-scale-in px-4">
          <Button size="lg" className="gradient-primary shadow-hero text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            Ver Nuestro Trabajo
          </Button>
          <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-primary/30 hover:bg-primary/10 w-full sm:w-auto">
            Contactar Ahora
          </Button>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-accent/20 blur-xl"></div>
    </section>
  );
};

export default Hero;