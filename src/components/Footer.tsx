const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              CreativeStudio
            </h3>
            <p className="text-foreground/70 mb-4 max-w-md">
              Transformamos ideas en experiencias digitales excepcionales que conectan marcas con personas.
            </p>
            <div className="flex space-x-4">
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
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Diseño UX/UI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Branding</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Equipo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-foreground/70">
          <p>&copy; 2024 CreativeStudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;