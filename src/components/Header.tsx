import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-secondary/20">
      <div className="container mx-auto px-2 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <img 
            src="/lovable-uploads/logo2.png" 
            alt="NORDATA" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-primary-foreground">NORDATA.AI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-primary-foreground hover:text-secondary transition-colors">
            Início
          </a>
          <a href="#plataforma" className="text-primary-foreground hover:text-secondary transition-colors">
            Plataforma
          </a>
          <a href="/servicios" className="text-primary-foreground hover:text-secondary transition-colors">
            Serviços
          </a>
          <a href="#casos" className="text-primary-foreground hover:text-secondary transition-colors">
            Casos de sucesso
          </a>
          <a href="/blog" className="text-primary-foreground hover:text-secondary transition-colors">
            Blog
          </a>
          <a href="#contato" className="text-primary-foreground hover:text-secondary transition-colors">
            Contato
          </a>
        </nav>
        
        <div className="w-24"></div>
      </div>
    </header>
  );
};

export default Header;