import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-12 md:py-24 px-4 md:px-6 bg-agrokapp-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#111] rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5 group"
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-agrokapp-green/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-40 md:opacity-60 group-hover:opacity-80 transition-opacity duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none opacity-30 md:opacity-50"></div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 md:opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-6 md:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-agrokapp-green animate-pulse"></span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Junte-se à revolução</span>
            </motion.div>

            <h2 className="text-[32px] md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.1]">
              Pronto para revolucionar <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">sua forma de comprar?</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-2xl mb-8 md:mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Junte-se a milhares de produtores e lojistas que já estão economizando tempo e dinheiro com a Agrokapp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:min-w-[200px] sm:w-auto"
              >
                <FaGooglePlay size={24} />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-white/60 leading-none mb-0.5">Disponível no</div>
                  <div className="text-sm font-bold leading-none">Google Play</div>
                </div>
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:min-w-[200px] sm:w-auto"
              >
                <FaApple size={28} />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-white/60 leading-none mb-0.5">Disponível na</div>
                  <div className="text-sm font-bold leading-none">App Store</div>
                </div>
              </motion.button>
            </div>
            
            <p className="mt-8 md:mt-12 text-sm text-gray-500 font-mono">
              Disponível para Android e iOS. Cadastro 100% gratuito.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
