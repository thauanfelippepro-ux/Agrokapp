import { motion } from "motion/react";
import { Search, MapPin, ShoppingBag, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Search,
    title: "Busque o que precisa",
    description: "Navegue por milhares de produtos, de insumos a maquinário pesado, com filtros inteligentes.",
  },
  {
    id: "02",
    icon: MapPin,
    title: "Localize fornecedores",
    description: "Encontre as melhores lojas e distribuidores próximos à sua propriedade com preços já definidos.",
  },
  {
    id: "03",
    icon: ShoppingBag,
    title: "Escolha e Compre",
    description: "Compare preços, escolha o melhor fornecedor e compre com segurança direto pelo app, igual pedir comida.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-agrokapp-green/10 text-agrokapp-green font-bold text-xs uppercase tracking-wider mb-4 md:mb-6"
          >
            Simples e Rápido
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[24px] md:text-5xl font-display font-bold text-agrokapp-text tracking-tight leading-tight mb-4 md:mb-6"
          >
            Como a Agrokapp <br className="md:hidden" />
            <span className="text-agrokapp-green">funciona</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-base md:text-lg font-light max-w-2xl mx-auto"
          >
            Conectamos você às melhores oportunidades do mercado em apenas 3 passos simples e seguros.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-gray-200 z-0">
            <div className="absolute top-0 left-0 h-full bg-agrokapp-green w-1/3 opacity-20"></div>
            <div className="absolute top-0 left-1/3 h-full bg-agrokapp-green w-1/3 opacity-10"></div>
          </div>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-agrokapp-green/10 rounded-2xl flex items-center justify-center text-agrokapp-green group-hover:bg-agrokapp-green group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                      <step.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center text-sm font-bold text-gray-400 shadow-sm z-20 group-hover:border-white group-hover:text-agrokapp-green transition-colors">
                      {step.id}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-agrokapp-text group-hover:text-agrokapp-green transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <button className="bg-agrokapp-green text-agrokapp-text px-8 py-4 rounded-xl font-bold text-lg hover:bg-agrokapp-green-dark hover:text-white transition-all duration-300 shadow-lg shadow-agrokapp-green/20 hover:shadow-xl hover:shadow-agrokapp-green/30 flex items-center gap-3 group">
            Começar agora
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
