import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
          CreativeStudio
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </div>
        
        <Button variant="default" className="gradient-primary shadow-glow">
          Comenzar Proyecto
        </Button>
      </nav>
    </header>
  );
};

export default Header;