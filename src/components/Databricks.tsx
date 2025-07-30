import { Card, CardContent } from "@/components/ui/card";

const DatabricksPartnership = () => {
  const databricksTools = [
    "Apache Spark",
    "Delta Lake",
    "MLflow",
    "Unity Catalog",
    "Databricks SQL",
    "Delta Live Tables",
    "Feature Store",
    "AutoML",
    "Model Serving",
    "Workflows",
    "Databricks Connect",
    "Repos",
    "Cluster Policies",
    "Secrets Management",
    "Access Control",
    "Monitoring & Observability"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img 
                src="https://www.databricks.com/sites/default/files/2021-05/db-nav-logo.svg" 
                alt="Databricks" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-muted-foreground">+</span>
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/8b51a508-e5c4-42e6-a6fb-b1824152b97a.png" 
                  alt="NORDATA" 
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold text-primary">NORDATA</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Parceiros Oficiais Databricks
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Como parceiros certificados da Databricks, aproveitamos a plataforma líder mundial 
              em análise de dados e inteligência artificial para entregar soluções empresariais de alta performance.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div className="space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    A Plataforma de Dados Unificada
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      A Databricks oferece uma plataforma unificada que combina data engineering, 
                      ciência de dados, machine learning e analytics em um ambiente colaborativo.
                    </p>
                    <p>
                      Nossa expertise em Databricks nos permite implementar soluções que processam 
                      petabytes de dados com performance excepcional e custos otimizados.
                    </p>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">10x</div>
                      <div className="text-sm text-muted-foreground">Mais Rápido</div>
                    </div>
                    <div className="text-center p-4 bg-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-accent">50%</div>
                      <div className="text-sm text-muted-foreground">Menor Custo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Scrolling Tools */}
            <div className="relative">
              <h4 className="text-xl font-semibold mb-6 text-center text-primary">
                Ferramentas que Dominamos
              </h4>
              <div className="relative h-96 overflow-hidden bg-gradient-to-b from-card/50 to-card/80 backdrop-blur-sm rounded-xl border border-border/50">
                {/* Scrolling container */}
                <div className="absolute w-full animate-[scroll-up_20s_linear_infinite] space-y-3 p-6">
                  {/* Duplicate the tools array to create seamless loop */}
                  {[...databricksTools, ...databricksTools].map((tool, index) => (
                    <div 
                      key={`${tool}-${index}`}
                      className="flex items-center gap-3 p-3 bg-background/80 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
                
                {/* Gradient overlays for fade effect */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-card/80 to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card/80 to-transparent pointer-events-none z-10"></div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Pronto para transformar seus dados em insights poderosos?
            </p>
            <a 
              href="#contato" 
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatabricksPartnership;