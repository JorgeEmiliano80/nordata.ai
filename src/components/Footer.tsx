const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">I</span>
              </div>
              <span className="font-bold text-xl">IntelligentByte</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Transformando empresas con soluciones inteligentes de datos e IA 
              para construir el futuro digital.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-secondary">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors">Inteligencia Artificial</a></li>
              <li><a href="#servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors">Análisis de Datos</a></li>
              <li><a href="#servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors">Machine Learning</a></li>
              <li><a href="#servicios" className="text-primary-foreground/80 hover:text-secondary transition-colors">Consultoría Tech</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-accent">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#nosotros" className="text-primary-foreground/80 hover:text-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="text-primary-foreground/80 hover:text-accent transition-colors">Contacto</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-highlight">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">📧 contacto@intelligentbyte.com</li>
              <li className="text-primary-foreground/80">📱 +34 900 123 456</li>
              <li className="text-primary-foreground/80">📍 Madrid, España</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 IntelligentByte. Todos los derechos reservados. | 
            Impulsando la innovación con datos e inteligencia artificial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;