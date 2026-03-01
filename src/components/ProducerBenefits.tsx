import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Comparação de preços em tempo real com múltiplos fornecedores",
  "Pagamento seguro e facilitado via app",
  "Histórico completo de pedidos e notas fiscais",
  "Entrega garantida com rastreamento",
];

export default function ProducerBenefits() {
  return (
    <section id="producer-benefits" className="py-16 md:py-32 bg-agrokapp-surface-alt relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-agrokapp-green/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-1 w-full"
        >
          <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 group">
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
             <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
              alt="Produtor Rural usando celular"
              className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 glass-premium p-4 md:p-6 rounded-2xl border border-white/20 z-20 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-wider">Economia Estimada</span>
                <span className="text-agrokapp-text font-bold bg-agrokapp-green px-2 py-1 rounded-lg text-[10px] md:text-xs">-15%</span>
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-white">R$ 14.250,00</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">na última safra</div>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-agrokapp-green/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm mb-4 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-agrokapp-green animate-pulse"></span>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Para Produtores</span>
          </div>
          
          <h2 className="text-[24px] md:text-5xl font-display font-bold text-agrokapp-text mb-4 md:mb-6 leading-tight tracking-tight">
            Mais rentabilidade <br/> para sua lavoura.
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-10 leading-relaxed font-light">
            Chega de perder tempo ligando para vários fornecedores. 
            Com a Agrokapp, você tem a loja agropecuária na palma da mão.
          </p>

          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-xl bg-agrokapp-green/10 flex items-center justify-center text-agrokapp-green group-hover:bg-agrokapp-green group-hover:text-white transition-colors duration-300 mt-1 shrink-0">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </div>
                <span className="text-lg text-gray-700 font-medium group-hover:text-agrokapp-text transition-colors">
                  {benefit}
                </span>
              </motion.li>
            ))}
          </ul>
          
          <a href="#final-cta" className="mt-12 bg-agrokapp-green text-agrokapp-text px-8 py-4 rounded-xl font-bold text-lg hover:bg-agrokapp-green-dark hover:text-white transition-all duration-300 shadow-lg shadow-agrokapp-green/20 hover:shadow-xl hover:shadow-agrokapp-green/30 flex items-center gap-3 group w-fit">
            Começar agora
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
