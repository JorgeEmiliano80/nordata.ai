import { Button } from "@/components/ui/button";
import heroAiAnalyticsBg from "@/assets/hero-ai-analytics-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 15, 50, 0.95), rgba(255, 20, 147, 0.1)), url(${heroAiAnalyticsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/60"></div>
      
      {/* Animated wave overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full animated-waves opacity-30">
          <div className="absolute top-1/4 left-0 w-96 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          <div className="absolute top-2/4 right-0 w-80 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-3/4 left-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-highlight to-transparent" style={{animationDelay: '8s'}}></div>
        </div>
        
        {/* Data stream particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-2 h-2 bg-secondary/60 rounded-full data-flow"></div>
          <div className="absolute top-2/3 left-0 w-1 h-1 bg-accent/60 rounded-full data-flow" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-highlight/60 rounded-full data-flow" style={{animationDelay: '6s'}}></div>
        </div>
      </div>
      
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
        
        {/* Enhanced geometric decorative elements */}
        <div className="absolute top-20 left-10 w-px h-20 bg-gradient-to-b from-secondary/50 to-transparent neural-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-px bg-gradient-to-r from-accent/50 to-transparent neural-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-20 w-2 h-2 border border-highlight/30 rotate-45 neural-pulse" style={{animationDelay: '3s'}}></div>
      </div>
    </section>
  );
};

export default Hero;