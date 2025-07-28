import { Button } from "@/components/ui/button";
import heroFuturisticBg from "@/assets/hero-futuristic-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 15, 50, 0.95), rgba(255, 20, 147, 0.1)), url(${heroFuturisticBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/60"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Transformamos{" "}
            <span className="bg-gradient-to-r from-secondary to-highlight bg-clip-text text-transparent">
              dados
            </span>{" "}
            em{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              inteligência
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Soluções avançadas de inteligência artificial e análise de dados 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="glow" 
              size="lg" 
              className="text-lg px-8 py-4 shadow-glow hover:shadow-primary transition-all duration-300"
              onClick={() => {
                // Link para plataforma - configurado para adicionar link posteriormente
                window.open('#', '_blank');
              }}
            >
              Descubra nossa plataforma
            </Button>
          </div>
        </div>
        
        {/* Geometric decorative elements */}
        <div className="absolute top-20 left-10 w-px h-20 bg-gradient-to-b from-secondary/50 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-20 h-px bg-gradient-to-r from-accent/50 to-transparent"></div>
        <div className="absolute top-1/2 right-20 w-2 h-2 border border-highlight/30 rotate-45"></div>
      </div>
    </section>
  );
};

export default Hero;