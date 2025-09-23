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
      
      <div className="container mx-auto px-6 text-center z-10 relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up">
          Creamos Experiencias
          <span className="block gradient-primary bg-clip-text text-transparent">
            Digitales Únicas
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up">
          Transformamos ideas innovadoras en soluciones digitales impactantes que conectan con tu audiencia
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-scale-in">
          <Button size="lg" className="gradient-primary shadow-hero text-lg px-8 py-4">
            Ver Nuestro Trabajo
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10">
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