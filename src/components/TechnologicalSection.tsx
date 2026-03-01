import { motion } from "motion/react";
import { Network, Cpu, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Conexão Inteligente",
    description: "Algoritmos que conectam sua necessidade ao fornecedor ideal em milissegundos."
  },
  {
    icon: Cpu,
    title: "Processamento em Nuvem",
    description: "Infraestrutura escalável que garante estabilidade mesmo em picos de safra."
  },
  {
    icon: Globe,
    title: "Alcance Nacional",
    description: "Uma rede unificada que elimina barreiras geográficas para o seu negócio."
  },
  {
    icon: Zap,
    title: "Transações Instantâneas",
    description: "Sistema de pagamentos otimizado para segurança e velocidade."
  }
];

export default function TechnologicalSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1a10] to-black opacity-80"></div>
      
      {/* Grid and Light Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-agrokapp-green/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

      {/* Connecting Lines Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <svg className="w-full h-full opacity-20">
            <motion.path
              d="M0,100 Q400,300 800,100 T1600,300"
              fill="none"
              stroke="url(#gradient-line)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#73E1AC" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-agrokapp-green shadow-[0_0_10px_#73E1AC]"></span>
            <span className="text-xs font-bold text-agrokapp-green uppercase tracking-widest">Infraestrutura Invisível</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Tecnologia que impulsiona <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-agrokapp-green to-blue-400">o futuro do campo.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Uma rede robusta e segura operando nos bastidores para garantir que seus negócios nunca parem.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-agrokapp-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-agrokapp-green mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-white/10">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
