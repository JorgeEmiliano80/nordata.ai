import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-2 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/logo2.png" 
            alt="NORDATA" 
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-primary">NORDATA</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#plataforma" className="text-foreground hover:text-primary transition-colors">
            Plataforma
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        
        <div className="w-24"></div>
      </div>
    </header>
  );
};

export default Header;