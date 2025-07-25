import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a aprovechar 
            el poder de los datos y la inteligencia artificial.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" placeholder="Tu empresa" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" placeholder="+34 123 456 789" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea 
                  id="mensaje" 
                  placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  rows={5}
                />
              </div>
              
              <Button variant="hero" className="w-full" size="lg">
                Enviar Mensaje
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3"></div>
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <span className="text-secondary-foreground text-sm">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contacto@intelligentbyte.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground text-sm">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+34 900 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Oficina</p>
                    <p className="text-muted-foreground">Madrid, España</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-accent flex items-center">
                  <div className="w-3 h-3 bg-gradient-accent rounded-full mr-3"></div>
                  ¿Por qué Elegirnos?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Consultoría gratuita inicial</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Soluciones personalizadas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Implementación rápida</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Soporte continuo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;