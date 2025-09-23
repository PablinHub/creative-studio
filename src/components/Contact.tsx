import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up">
            Hablemos de tu <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto opacity-0 animate-fade-in-up">
            ¿Tienes una idea increíble? Estamos aquí para hacerla realidad
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulario de contacto */}
          <Card className="gradient-card border-border/50 opacity-0 animate-fade-in-left">
            <CardHeader>
              <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
              <CardDescription>
                Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    placeholder="Tu nombre" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Tu email" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              <Input 
                placeholder="Asunto del mensaje" 
                className="bg-background/50 border-border/50 focus:border-primary"
              />
              <Textarea 
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={6}
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
              <Button className="w-full gradient-primary shadow-glow">
                Enviar Mensaje
              </Button>
            </CardContent>
          </Card>
          
          {/* Información de contacto */}
          <div className="space-y-8 opacity-0 animate-fade-in-right">
            <Card className="gradient-card border-border/50">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-foreground/70">hola@creativestudio.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-border/50">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="text-2xl">📱</div>
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-border/50">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-foreground/70">Madrid, España</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Síguenos</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;