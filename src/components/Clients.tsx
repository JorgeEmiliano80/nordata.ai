import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    name: "SCAP Analysis",
    logo: "/lovable-uploads/ebb4574d-71ea-4b2f-829f-a65e83913fd8.png",
    description: "Uma empresa com referência internacional em soluções analíticas, inteligência de dados e capacitação profissional.",
    details: "A SCAP Analysis atua há mais de 10 anos com projetos de alto nível em toda a América Latina, oferecendo soluções completas em:",
    services: [
      "Governança de dados e arquitetura escalável",
      "Modelos de Machine Learning", 
      "Formação técnica especializada"
    ]
  }
];

const Clients = () => {
  return (
    <section id="clientes" className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nossos Clientes e Parceiros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos com empresas líderes que confiam em nossa expertise para transformar seus dados em vantagem competitiva.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-primary transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-xl p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                      {client.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                      {client.description}
                    </p>
                    
                    <p className="text-foreground mb-4 font-medium">
                      {client.details}
                    </p>

                    <div className="space-y-2">
                      {client.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center justify-center lg:justify-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          Cliente Premium
                        </span>
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                          Parceiro Estratégico
                        </span>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          +10 anos de experiência
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <Card className="border-border/50 bg-gradient-accent/10 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Interessado em uma parceria?
              </h3>
              <p className="text-muted-foreground mb-6">
                Junte-se aos nossos parceiros estratégicos e descubra como podemos 
                colaborar para oferecer soluções ainda mais robustas aos nossos clientes.
              </p>
              <a 
                href="#contato" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Falar sobre parcerias
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;