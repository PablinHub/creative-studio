const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">
              CreativeStudio
            </h3>
            <p className="text-sm sm:text-base text-foreground/70 mb-4 max-w-md">
              Transformamos ideas en experiencias digitales excepcionales que conectan marcas con personas.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                <span className="text-sm">🌐</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm sm:text-base text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Diseño UX/UI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Branding</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm sm:text-base text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Equipo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-foreground/70">
          <p>&copy; 2024 CreativeStudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;