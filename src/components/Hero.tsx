import { Button } from "@/components/ui/button";
import heroWavesBg from "@/assets/hero-waves-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 15, 50, 0.8), rgba(255, 20, 147, 0.3)), url(${heroWavesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Transformamos{" "}
            <span className="bg-gradient-to-r from-secondary to-highlight bg-clip-text text-transparent">
              Dados
            </span>{" "}
            em{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Inteligência
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Soluções avançadas de Inteligência Artificial e análise de dados 
            para impulsionar o crescimento da sua empresa rumo ao futuro digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="glow" size="lg" className="text-lg px-8 py-4">
              Descubra Nossa Plataforma
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Ver Casos de Sucesso
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-highlight/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
    </section>
  );
};

export default Hero;