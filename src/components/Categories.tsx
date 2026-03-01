import { motion } from "motion/react";
import { 
  Sprout, 
  Droplets, 
  Tractor, 
  Hammer, 
  Carrot, 
  FlaskConical, 
  Flower2, 
  Wheat, 
  Syringe,
  ArrowRight
} from "lucide-react";

const categories = [
  { icon: Sprout, name: "Insumos Agrícolas", count: "2.4k produtos" },
  { icon: Droplets, name: "Irrigação", count: "850 produtos" },
  { icon: Tractor, name: "Máquinas", count: "1.2k produtos" },
  { icon: Hammer, name: "Ferramentas", count: "3.1k produtos" },
  { icon: Carrot, name: "Horticultura", count: "900 produtos" },
  { icon: FlaskConical, name: "Defensivos", count: "1.5k produtos" },
  { icon: Flower2, name: "Floricultura", count: "400 produtos" },
  { icon: Wheat, name: "Rações", count: "1.8k produtos" },
  { icon: Syringe, name: "Veterinária", count: "600 produtos" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-32 bg-agrokapp-surface-alt relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-4xl font-display font-bold text-agrokapp-text mb-4 tracking-tight"
            >
              Tudo o que você precisa
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-gray-500 text-lg font-light max-w-xl"
            >
              Explore as categorias mais buscadas pelos produtores de todo o Brasil.
            </motion.p>
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 no-scrollbar">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-agrokapp-green/30 transition-all duration-300 cursor-pointer group flex flex-col items-start h-full relative overflow-hidden min-w-[160px] md:min-w-0 snap-center"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-agrokapp-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-agrokapp-green group-hover:text-white transition-all duration-300 text-gray-400 mb-4 relative z-10">
                <cat.icon className="w-6 h-6 transition-colors" strokeWidth={1.5} />
              </div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-gray-800 group-hover:text-agrokapp-text transition-colors text-[15px] mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-agrokapp-green-dark transition-colors font-medium">
                  {cat.count}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-agrokapp-green">
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
          
          {/* "+ X categories" card */}
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categories.length * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300 hover:border-agrokapp-green hover:bg-white transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-2 group h-full min-h-[160px]"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-agrokapp-green group-hover:text-agrokapp-green transition-colors">
                <span className="font-bold text-xs">+15</span>
              </div>
              <span className="font-bold text-gray-600 text-sm group-hover:text-agrokapp-text transition-colors text-center">Outras categorias</span>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
