import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">I</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            IntelligentByte
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>
        
        <Button variant="hero" size="lg">
          Comenzar
        </Button>
      </div>
    </header>
  );
};

export default Header;