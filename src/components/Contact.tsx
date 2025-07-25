import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato hoje e descubra como podemos ajudá-lo a aproveitar 
            o poder dos dados e da inteligência artificial.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" placeholder="Sua empresa" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" placeholder="+55 11 99999-9999" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea 
                  id="mensagem" 
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudá-lo..."
                  rows={5}
                />
              </div>
              
              <Button variant="hero" className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3"></div>
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <span className="text-secondary-foreground text-sm">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contato@nordata.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground text-sm">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-muted-foreground">+55 11 9999-8888</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Escritório</p>
                    <p className="text-muted-foreground">São Paulo, Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-accent flex items-center">
                  <div className="w-3 h-3 bg-gradient-accent rounded-full mr-3"></div>
                  Por que nos Escolher?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Consultoria gratuita inicial</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Soluções personalizadas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Implementação rápida</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Suporte contínuo</span>
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