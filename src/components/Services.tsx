import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import aiIcon from "@/assets/ai-icon.jpg";
import analyticsIcon from "@/assets/analytics-icon.jpg";
import mlIcon from "@/assets/ml-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: aiIcon,
      title: "Inteligencia Artificial",
      description: "Desarrollamos soluciones de IA personalizadas que automatizan procesos y mejoran la toma de decisiones empresariales.",
      features: ["Procesamiento de Lenguaje Natural", "Visión por Computadora", "Automatización Inteligente", "Chatbots Avanzados"]
    },
    {
      icon: analyticsIcon,
      title: "Análisis de Datos",
      description: "Convertimos tus datos en insights accionables mediante técnicas avanzadas de análisis y visualización.",
      features: ["Dashboards Interactivos", "Análisis Predictivo", "KPIs Personalizados", "Reportes Automatizados"]
    },
    {
      icon: mlIcon,
      title: "Machine Learning",
      description: "Implementamos modelos de aprendizaje automático que aprenden y se adaptan para optimizar tus operaciones.",
      features: ["Modelos Predictivos", "Clasificación de Datos", "Sistemas de Recomendación", "Detección de Anomalías"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas de vanguardia para transformar tu negocio 
            con el poder de los datos y la inteligencia artificial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-500 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-2xl w-20 h-20 flex items-center justify-center group-hover:animate-pulse-glow">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-12 h-12 object-cover rounded-lg filter brightness-0 invert"
                  />
                </div>
                <CardTitle className="text-2xl mb-2 text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-secondary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;