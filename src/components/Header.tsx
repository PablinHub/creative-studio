import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold gradient-text">
          CreativeStudio
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          <a href="#inicio" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#portfolio" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#contacto" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <Button variant="default" className="hidden sm:inline-flex gradient-primary shadow-glow text-sm lg:text-base">
            Comenzar Proyecto
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-2xl hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in-up">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
            <a 
              href="#inicio" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition-colors py-2"
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition-colors py-2"
            >
              Servicios
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition-colors py-2"
            >
              Portfolio
            </a>
            <a 
              href="#contacto" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition-colors py-2"
            >
              Contacto
            </a>
            <Button 
              variant="default" 
              className="sm:hidden gradient-primary shadow-glow w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Comenzar Proyecto
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;