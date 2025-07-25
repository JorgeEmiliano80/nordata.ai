import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "500+", label: "Projetos Completados" },
    { number: "98%", label: "Satisfação do Cliente" },
    { number: "50+", label: "Empresas Transformadas" },
    { number: "24/7", label: "Suporte Disponível" }
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quem Somos?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos uma equipe de especialistas em ciência de dados e inteligência artificial 
              com mais de 10 anos de experiência transformando empresas através da inovação tecnológica.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa missão é democratizar o acesso a tecnologias avançadas, 
              ajudando empresas de todos os portes a aproveitar o poder de seus dados 
              para tomar decisões mais inteligentes e competitivas.
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
                <CardTitle className="text-primary">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser líderes na transformação digital, criando um futuro onde 
                  cada empresa possa aproveitar ao máximo o potencial de seus dados 
                  mediante soluções de IA acessíveis e eficazes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-accent">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Inovação constante</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Excelência no atendimento</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Transparência total</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Compromisso com resultados</span>
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