import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Por que é importante trabalhar com dados na minha empresa?",
      answer: "Os dados são o novo petróleo da era digital. Eles permitem tomar decisões informadas, identificar padrões ocultos. otimizar processos e criar vantagens competitiva. As empresas que aproveitam seus dados têm 5 vezes mais chances de tomar decisões mais rápidas do que seus concorrentes."
    },
    {
      question: "Como a inteligência artificial pode transformar meu negócio?",
      answer: "A IA pode automatizar tarefas repetitivas, melhorar a experiência do cliente com chatbots inteligentes, prever tendências de mercado, otimizar cadeias de suprimentos e detectar fraudes. Isso se traduz em redução de custos, aumento de eficiência e novas oportunidades de receita."
    },
    {
      question: "Quais tipos de dados posso analisar na minha empresa?",
      answer: "Praticamente todos: vendas, comportamento dos clientes, operações, finanças, recursos humanos, marketing digital, redes sociais, sensores IoT, logs de sistemas e muito mais. Cada área do seu negócio gera dados valiosos que podem ser transformados em insights acionáveis."
    },
    {
      question: "É caro implementar soluções de IA e análise de dados?",
      answer: "O custo varia conforme a complexidade, mas o retorno sobre o investimento geralmente é muito alto. Existem soluções escaláveis para pequenas empresas até grandes corporações. O investimento costuma ser recuperado em 6 a 18 meses por meio de eficiências operacionais e novas oportunidades de negócio."
    },
    {
      question: "Preciso ter conhecimentos técnicos para usar essas soluções?",
      answer: "Não necessariamente. Desenvolvemos interfaces intuitivas e dashboards fáceis de usar. Além disso, fornecemos treinamento e suporte técnico. Nosso objetivo é que qualquer usuário de negócio possa aproveitar o poder dos dados sem ser um especialista técnico."
    },
    {
      question: "Como vocês garantem a segurança e privacidade dos meus dados?",
      answer: "Implementamos os mais altos padrões de segurança: criptografia de ponta a ponta, conformidade com GDPR/LGPD, auditorias regulares, acesso baseado em papéis e backups seguros. Seus dados estão protegidos com tecnologia de nível bancário."
    },
    {
      question: "Quanto tempo leva para ver resultados com análise de dados?",
      answer: "Os primeiros insights podem aparecer em dias ou semanas, dependendo da qualidade e volume de dados. Resultados significativos nos processos de negócio geralmente aparecem em 1 a 3 meses. A IA melhora continuamente com mais dados e tempo."
    },
    {
      question: "O que diferencia a NORDATA.AI de outras empresas de análise de dados?",
      answer: "Somos 100% especializados em dados e IA, con foco em resultados de negócios tangíveis. Oferecemos soluções personalizadas, não produtos genéricos. Nossa equipe combina expertise técnico profundo com conhecimento de negócios, garantindo implementações bem-sucedidas."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-secondary to-highlight bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respondemos as dúvidas mais comuns sobre a importância dos dados e da inteligência artificial no seu negócio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Tem mais perguntas sobre como podemos ajudar você?
          </p>
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Fale com nossos especialistas
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;