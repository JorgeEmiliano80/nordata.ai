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
    title: "Data Analytics & Visualization",
    description: "Transform raw data into meaningful insights with interactive dashboards and comprehensive reports.",
    badge: "Analytics",
    badgeVariant: "default",
    icon: BarChart3,
    features: [
      "Interactive dashboard development",
      "Statistical analysis and reporting", 
      "Data visualization and storytelling",
      "KPI tracking and monitoring"
    ],
    startingPrice: "Upon request",
    timeline: "3-5 weeks"
  },
  {
    id: "machine-learning",
    title: "Machine Learning Solutions", 
    description: "Custom ML models for prediction, classification, and recommendation systems tailored to your business needs.",
    badge: "Machine Learning",
    badgeVariant: "secondary",
    icon: Brain,
    features: [
      "Predictive modeling and forecasting",
      "Classification and clustering algorithms",
      "Recommendation systems",
      "Model deployment and monitoring"
    ],
    startingPrice: "Upon request",
    timeline: "Upon request"
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Strategic insights through advanced analytics to drive informed decision-making and business growth.",
    badge: "Analytics", 
    badgeVariant: "default",
    icon: TrendingUp,
    features: [
      "Market analysis and research",
      "Customer segmentation strategies",
      "Performance optimization insights",
      "Strategic planning support"
    ],
    startingPrice: "Upon request",
    timeline: "4-8 weeks"
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Pipelines",
    description: "Robust data infrastructure and automated pipelines for efficient data processing and management.",
    badge: "Automation",
    badgeVariant: "outline",
    icon: Database,
    features: [
      "ETL pipeline development",
      "Data warehouse design",
      "Real-time data processing",
      "Cloud infrastructure setup"
    ],
    startingPrice: "Upon request",
    timeline: "6-10 weeks"
  },
  {
    id: "data-strategy",
    title: "Data Strategy Consulting",
    description: "Expert guidance on data strategy, technology selection, and implementation roadmaps.",
    badge: "Consulting",
    badgeVariant: "secondary",
    icon: Users,
    features: [
      "Data strategy development", 
      "Technology assessment and selection",
      "Implementation roadmap planning",
      "Change management support"
    ],
    startingPrice: "Upon request",
    timeline: "2-4 weeks"
  },
  {
    id: "process-automation",
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows using AI and machine learning technologies.",
    badge: "Automation",
    badgeVariant: "outline", 
    icon: Zap,
    features: [
      "Workflow automation design",
      "AI-powered process optimization",
      "Integration with existing systems",
      "Performance monitoring and optimization"
    ],
    startingPrice: "Upon request",
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
        <title>Servicios - NORDATA.AI | Soluciones de Datos e IA</title>
        <meta name="description" content="Descubre nuestros servicios especializados en análisis de datos, machine learning, business intelligence y automatización de procesos." />
        <meta name="keywords" content="servicios, análisis de datos, machine learning, business intelligence, automatización, consultoría" />
        <meta property="og:title" content="Servicios - NORDATA.AI | Soluciones de Datos e IA" />
        <meta property="og:description" content="Servicios especializados en transformación digital, análisis de datos e inteligencia artificial." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/servicios" />
      </Helmet>

      {/* Header with back button */}
      <header className="bg-primary/95 backdrop-blur-md border-b border-secondary/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-secondary/20">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al inicio
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
            Nuestros Servicios
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Soluciones integrales de datos e inteligencia artificial diseñadas para impulsar 
            el crecimiento y la innovación en su empresa.
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
                          <span className="font-medium">Precio inicial:</span>
                        </div>
                        <span className="text-primary font-medium">{service.startingPrice}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Timeline:</span>
                        </div>
                        <span className="text-muted-foreground">{service.timeline}</span>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                        <Link to="/#contato">
                          Solicitar Cotización
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
                ¿Listo para transformar su negocio con datos?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestro equipo de expertos está aquí para ayudarle a diseñar la solución 
                perfecta para sus necesidades específicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#contato">
                    Hablar con un experto
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/blog">
                    Ver casos de estudio
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