const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/8b51a508-e5c4-42e6-a6fb-b1824152b97a.png" 
                alt="NORDATA" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Soluções avançadas de IA e Data Analytics
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-secondary">Plataforma</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#plataforma" className="text-primary-foreground/80 hover:text-secondary transition-colors">Inteligência Artificial</a></li>
              <li><a href="#plataforma" className="text-primary-foreground/80 hover:text-secondary transition-colors">Data Analytics</a></li>
              <li><a href="#plataforma" className="text-primary-foreground/80 hover:text-secondary transition-colors">Machine Learning</a></li>
              <li><a href="#plataforma" className="text-primary-foreground/80 hover:text-secondary transition-colors">Consultoria</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-accent">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#casos" className="text-primary-foreground/80 hover:text-accent transition-colors">Casos de Sucesso</a></li>
              <li><a href="#contato" className="text-primary-foreground/80 hover:text-accent transition-colors">Contato</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-highlight">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">📧 jorgeemiliano80@icloud.com</li>
              <li className="text-primary-foreground/80">📱 +55 45 9913-58484</li>
              <li className="text-primary-foreground/80">📍 Foz do Iguaçú, Brasil</li>
              <li className="text-primary-foreground/80">📍 CABA, Argentina</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 NORDATA. Todos os direitos reservados. | 
            Impulsionando a inovação com dados e inteligência artificial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;