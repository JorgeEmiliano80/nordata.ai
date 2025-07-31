import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import starfly from "@/assets/starfly-icon.jpg";
import analyticsIcon from "@/assets/analytics-icon.jpg";
import mlIcon from "@/assets/ml-icon.jpg";

const Services = () => {
  const platformContent = {
    title: "Nossa plataforma e como geramos valor",
    description: "Nossa plataforma de processamento de dados e inteligência artificial foi concebida para entregar valor. Projetamos algoritmos e ferramentas de IA que revelam insights acionáveis, aprimoram decisões e criam novas fontes de valor – tudo com simplicidade e segurança de ponta a ponta.",
    details: "Em termos práticos, isso significa que a Nordata cuida de todo o fluxo de dados: desde a coleta e integração de diferentes fontes, passando pelo processamento e análise avançada (incluindo modelos de machine learning), até a visualização de resultados em painéis intuitivos.",
    advantages: "Privilegiamos a simplicidade de uso – mesmo organizações sem grande equipe técnica podem se beneficiar – e a segurança dos dados, assegurando compliance e privacidade em cada etapa. Nosso diferencial está em tornar a IA acessível: com módulos prontos e personalizáveis, as empresas conseguem rapidamente implantar soluções de análise preditiva, detecção de anomalias, otimização de processos e muito mais, sem precisar reinventar a roda.",
    results: "Tudo isso sustentado por nossa experiência e DNA inovador, garantindo que as soluções não sejam apenas tecnicamente robustas, mas também alinhadas aos objetivos de negócio de cada cliente. O resultado? Decisões melhor informadas, redução de custos, aumento de receitas e identificação de oportunidades antes invisíveis – enfim, dados transformados em vantagens competitivas para nossos clientes."
  };

  const cases = [
    {
      icon: starfly,
      company: "Starfly",
      sector: "Aviação executiva",
      description: "A Starfly, empresa de passeios aéreos e venda de aviões, implementou nossa solução de monitoramento de dados e previsão de demanda.",
      results: "Otimizaram suas rotas e agendas de voos, aumentando a taxa de ocupação e reduzindo custos operacionais. A análise de dados de manutenção preditiva permitiu antecipar necessidades de serviço nas aeronaves, diminuindo o tempo de solo e melhorando a segurança."
    },
    {
      icon: analyticsIcon,
      company: "EcoAutomotores",
      sector: "Setor automotivo",
      description: "Uma concessionária de automóveis, onde a Nordata auxiliou na integração e análise dos dados de vendas e segmentação de clientes.",
      results: "Com nossos modelos preditivos, EcoAutomotores passou a prever tendências de vendas por modelo com maior precisão e de forma proativa. A empresa direcionou campanhas personalizadas aos clientes certos e viu as vendas crescerem em decorrência de um melhor entendimento do comportamento do comprador."
    }
  ];

  return (
    <>
      {/* Nossa Plataforma Section */}
      <section id="plataforma" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {platformContent.title}
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-6">
              <p>{platformContent.description}</p>
              <p>{platformContent.details}</p>
              <p>{platformContent.advantages}</p>
              <p>{platformContent.results}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Sucesso Section */}
      <section id="casos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Casos de sucesso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Para ilustrar o impacto da Nordata.AI, destacamos alguns clientes que alavancaram seus dados com nossa plataforma:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cases.map((case_, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center group-hover:animate-pulse-glow">
                      <img 
                        src={case_.icon} 
                        alt={case_.company}
                        className="w-8 h-8 object-cover rounded-lg filter brightness-0 invert"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">
                        {case_.company}
                      </CardTitle>
                      <p className="text-sm text-secondary font-medium">{case_.sector}</p>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground mb-4">
                    {case_.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-l-4 border-gradient-secondary pl-4">
                    <p className="text-foreground leading-relaxed">{case_.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;