import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/8b51a508-e5c4-42e6-a6fb-b1824152b97a.png" 
            alt="NORDATA" 
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#plataforma" className="text-foreground hover:text-primary transition-colors">
            Plataforma
          </a>
          <a href="#casos" className="text-foreground hover:text-primary transition-colors">
            Casos de Sucesso
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        
        <Button variant="hero" size="lg">
          Começar
        </Button>
      </div>
    </header>
  );
};

export default Header;