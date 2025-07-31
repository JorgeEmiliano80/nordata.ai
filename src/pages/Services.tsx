import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Database, 
  Users, 
  Zap,
  CheckCircle2,
  Clock,
  DollarSign
} from "lucide-react";
import { Helmet } from "react-helmet-async";

interface Service {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeVariant: "default" | "secondary" | "destructive" | "outline";
  icon: any;
  features: string[];
  startingPrice: string;
  timeline: string;
}

const services: Service[] = [
  {
    id: "data-analytics",
    title: "Análise e visualização de dados",
    description: "Transforme dados brutos em insights valiosos com dashboards interativos e relatórios completos.",
    badge: "Análise de dados",
    badgeVariant: "default",
    icon: BarChart3,
    features: [
      "Desenvolvimento de dashboards interativos",
      "Análise estatística e geração de relatórios",
      "Visualização de dados e storytelling",
      "Acompanhamento de KPIs"
    ],
    startingPrice: "Sob consulta",
    timeline: "3-5 weeks"
  },
  {
    id: "Machine-learning",
    title: "Soluções de machine learning", 
    description: "Modelos personalizados de ML para previsão, classificação e sistemas de recomedação adaptados ao seu negócio.",
    badge: "Machine Learning",
    badgeVariant: "secondary",
    icon: Brain,
    features: [
      "Modelagem preditiva e previsão",
      "Algoritmos de classificação e clustering",
      "Sistemas de recomendação",
      "Implantação e monitoramento de modelos"
    ],
    startingPrice: "Sob consulta",
    timeline: "Sob consulta"
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Insights estratégicos por meio de análises avançadas para impulsionar decisões informadas e crescimento empresarial.",
    badge: "Análise de dados", 
    badgeVariant: "default",
    icon: TrendingUp,
    features: [
      "Análise e pesquisa de mercado",
      "Estratégias de segmentação de clientes",
      "Otimização de desempenho",
      "Suporte ao planejamento estratégico"
    ],
    startingPrice: "Sob consulta",
    timeline: "4-8 weeks"
  },
  {
    id: "data-engineering",
    title: "Engenharia de dados e pipelines",
    description: "Infraestructura de dados robusta e pipelines automatizados para processamento e gerenciamento eficiente de dados.",
    badge: "Automação",
    badgeVariant: "outline",
    icon: Database,
    features: [
      "Desenvolvimento de pipelines ETL",
      "Projeto de Data Warehouse",
      "Processamento de dados em tempo real",
      "Configuração de infraestrutura em nuvem"
    ],
    startingPrice: "Sob consulta",
    timeline: "6-10 weeks"
  },
  {
    id: "data-strategy",
    title: "Consultoria em Estratégia de Dados",
    description: "Orientação especializada em estratégia de dados, seleção de tecnologia e planos de implementação.",
    badge: "Consultoria",
    badgeVariant: "secondary",
    icon: Users,
    features: [
      "Desenvolvimento de estratégia de dados", 
      "Avaliação e escolha de tecnologia",
      "Planejamento da implementação",
      "Suporte à gestão da mudança"
    ],
    startingPrice: "Sob consulta",
    timeline: "2-4 weeks"
  },
  {
    id: "process-automation",
    title: "Automação de processos",
    description: "Automatize tarefas repetitivas e fluxos de trabalho com tecnologias de IA e machine learning.",
    badge: "Automação",
    badgeVariant: "outline", 
    icon: Zap,
    features: [
      "Design de automação de fluxos",
      "Otimização de processos com IA",
      "Integração com sistemas existentes",
      "Monitoramento de desempenho"
    ],
    startingPrice: "Sob consulta",
    timeline: "4-6 weeks"
  }
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(services.map(service => service.badge)))];
  
  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.badge === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Serviços - NORDATA.AI | Soluções em dados e IA</title>
        <meta name="description" content="Descubra nossos serviços especializados em análise de dados, machine learning, business intelligence e automação de processos." />
        <meta name="keywords" content="serviços, análise de dados, machine learning, business intelligence, automação, consultoria" />
        <meta property="og:title" content="Serviços - NORDATA.AI | Soluções em dados e IA" />
        <meta property="og:description" content="Serviços especializados em transformação digital, análise de dados e inteligência artificial." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/serviços" />
      </Helmet>

      {/* Header with back button */}
      <header className="bg-primary/95 backdrop-blur-md border-b border-secondary/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-secondary/20">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao inicio
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/logo2.png" 
                alt="NORDATA" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-primary-foreground">NORDATA.AI</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nossos Serviços
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Soluções integradas de dados e inteligência artificial projetadas para impulsionar
            o crescimento e a inovação da sua empresa.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === "all" ? "Todos" : category}
              </Button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-primary transition-all duration-300 group h-full flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <Badge variant={service.badgeVariant as any}>{service.badge}</Badge>
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-primary transition-colors mb-3">
                      {service.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="border-t border-border/50 pt-4 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Preço inicial:</span>
                        </div>
                        <span className="text-primary font-medium">{service.startingPrice}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Prazo estimado:</span>
                        </div>
                        <span className="text-muted-foreground">{service.timeline}</span>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                        <Link to="/#contato">
                          Solicitar orçamento
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-border/50 bg-gradient-primary/10 backdrop-blur-sm">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4 text-primary">
                Pronto para transformar seu negócio com dados?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para ajudá-lo a projetar a solução
                ideal para as suas necessidades espcíficas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#contato">
                    Falar com um especialista
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Services;