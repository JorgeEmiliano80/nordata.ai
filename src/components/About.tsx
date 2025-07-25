import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "500+", label: "Proyectos Completados" },
    { number: "98%", label: "Satisfacción del Cliente" },
    { number: "50+", label: "Empresas Transformadas" },
    { number: "24/7", label: "Soporte Disponible" }
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ¿Quiénes Somos?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos un equipo de expertos en ciencia de datos e inteligencia artificial 
              con más de 10 años de experiencia transformando empresas a través de la innovación tecnológica.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestra misión es democratizar el acceso a tecnologías avanzadas, 
              ayudando a empresas de todos los tamaños a aprovechar el poder de sus datos 
              para tomar decisiones más inteligentes y competitivas.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser líderes en la transformación digital, creando un futuro donde 
                  cada empresa pueda aprovechar al máximo el potencial de sus datos 
                  mediante soluciones de IA accesibles y efectivas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-accent">Nuestros Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Innovación constante</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Excelencia en el servicio</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Transparencia total</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Compromiso con resultados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;