import { motion } from "motion/react";
import { TrendingUp, ArrowRight } from "lucide-react";

const benefits = [
  "Alcance milhares de novos clientes na sua região",
  "Gestão de estoque e pedidos em um só lugar",
  "Recebimento garantido e antecipação de valores",
  "Relatórios de vendas e inteligência de mercado",
];

export default function ShopkeeperBenefits() {
  return (
    <section id="shopkeepers" className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm mb-4 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-agrokapp-green animate-pulse"></span>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Para Lojistas</span>
          </div>

          <h2 className="text-[24px] md:text-5xl font-display font-bold text-agrokapp-text mb-4 md:mb-6 leading-tight">
            Venda mais e <br/> expanda seu negócio.
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-10 leading-relaxed font-light">
            Transforme sua loja física em um hub digital. 
            A Agrokapp conecta você a produtores que estão buscando seus produtos agora.
          </p>

          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-xl bg-agrokapp-green/10 flex items-center justify-center text-agrokapp-green group-hover:bg-agrokapp-green group-hover:text-white transition-colors duration-300 mt-1 shrink-0">
                  <TrendingUp className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <span className="text-lg text-gray-700 font-medium group-hover:text-agrokapp-text transition-colors">
                  {benefit}
                </span>
              </motion.li>
            ))}
          </ul>

          <a href="#final-cta" className="mt-8 md:mt-12 bg-agrokapp-green text-agrokapp-text px-8 py-4 rounded-xl font-bold text-lg hover:bg-agrokapp-green-dark hover:text-white transition-all duration-300 shadow-lg shadow-agrokapp-green/20 hover:shadow-xl hover:shadow-agrokapp-green/30 flex items-center gap-3 group w-full md:w-fit justify-center md:justify-start">
            Cadastrar minha loja
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full"
        >
          <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 group">
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop"
              alt="Lojista agro conferindo estoque"
              className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
             {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-6 right-6 md:top-8 md:right-8 glass-premium p-4 md:p-6 rounded-2xl border border-white/20 z-20 backdrop-blur-xl max-w-[180px] md:max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-agrokapp-green rounded-full animate-pulse"></div>
                <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase">Vendas Hoje</span>
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">+ 24%</div>
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                <div className="bg-agrokapp-green h-full w-[70%]"></div>
              </div>
            </motion.div>
          </div>

           {/* Decorative elements */}
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-agrokapp-green/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
