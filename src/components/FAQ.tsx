import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Por qué es importante trabajar con datos en mi empresa?",
      answer: "Los datos son el nuevo petróleo de la era digital. Permiten tomar decisiones informadas, identificar patrones ocultos, optimizar procesos y crear ventajas competitivas. Las empresas que aprovechan sus datos tienen 5 veces más probabilidades de tomar decisiones más rápidas que sus competidores."
    },
    {
      question: "¿Cómo puede la inteligencia artificial transformar mi negocio?",
      answer: "La IA puede automatizar tareas repetitivas, mejorar la experiencia del cliente con chatbots inteligentes, predecir tendencias de mercado, optimizar cadenas de suministro y detectar fraudes. Esto se traduce en reducción de costos, aumento de eficiencia y nuevas oportunidades de ingresos."
    },
    {
      question: "¿Qué tipos de datos puedo analizar en mi empresa?",
      answer: "Prácticamente todos: ventas, comportamiento de clientes, operaciones, finanzas, recursos humanos, marketing digital, redes sociales, sensores IoT, logs de sistemas, y más. Cada área de tu negocio genera datos valiosos que pueden convertirse en insights accionables."
    },
    {
      question: "¿Es costoso implementar soluciones de IA y análisis de datos?",
      answer: "El costo varía según la complejidad, pero el ROI suele ser muy alto. Existen soluciones escalables desde pequeñas empresas hasta corporaciones. La inversión se recupera típicamente en 6-18 meses a través de eficiencias operativas y nuevas oportunidades de negocio."
    },
    {
      question: "¿Necesito tener conocimientos técnicos para usar estas soluciones?",
      answer: "No necesariamente. Desarrollamos interfaces intuitivas y dashboards fáciles de usar. Además, proporcionamos capacitación y soporte técnico. Nuestro objetivo es que cualquier usuario de negocio pueda aprovechar el poder de los datos sin ser un experto técnico."
    },
    {
      question: "¿Cómo garantizan la seguridad y privacidad de mis datos?",
      answer: "Implementamos los más altos estándares de seguridad: encriptación end-to-end, cumplimiento con GDPR/LGPD, auditorías regulares, acceso basado en roles y backups seguros. Tus datos están protegidos con tecnología de nivel bancario."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados con análisis de datos?",
      answer: "Los primeros insights pueden aparecer en días o semanas, dependiendo de la calidad y volumen de datos. Resultados significativos en procesos de negocio suelen verse en 1-3 meses. La IA mejora continuamente con más datos y tiempo."
    },
    {
      question: "¿Qué diferencia a NORDATA de otras empresas de análisis de datos?",
      answer: "Nos especializamos 100% en datos e IA con enfoque en resultados de negocio tangibles. Ofrecemos soluciones personalizadas, no productos genéricos. Nuestro equipo combina expertise técnico profundo con comprensión de negocio, garantizando implementaciones exitosas."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Preguntas{" "}
            <span className="bg-gradient-to-r from-secondary to-highlight bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respondemos las dudas más comunes sobre la importancia de los datos y la inteligencia artificial en tu negocio
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
            ¿Tienes más preguntas sobre cómo podemos ayudarte?
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contacta con nuestros expertos
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;