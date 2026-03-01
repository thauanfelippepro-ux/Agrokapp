import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-12 md:pt-28 md:pb-28 overflow-hidden bg-agrokapp-bg bg-noise">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-gradient-to-br from-agrokapp-green/10 to-blue-50/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 opacity-60 md:opacity-100"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-gradient-to-tr from-agrokapp-green/5 to-yellow-50/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 opacity-60 md:opacity-100"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full shadow-sm mb-6 md:mb-8 hover:border-agrokapp-green/50 transition-colors cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agrokapp-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-agrokapp-green"></span>
            </span>
            <span className="text-xs font-bold text-gray-600 tracking-wide uppercase">O Marketplace do Agro</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[30px] md:text-[52px] font-display font-bold leading-[1.1] tracking-tight mb-4 md:mb-6 text-agrokapp-text max-w-4xl"
          >
            Conectando você aos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-agrokapp-green-dark to-agrokapp-green relative inline-block">
              melhores fornecedores
              <svg className="absolute w-full h-2 -bottom-1 left-0 text-agrokapp-green opacity-30 hidden md:block" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.99991 132.5 -3.50002 198 6.49997" stroke="currentColor" strokeWidth="3"/></svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] md:text-[22px] text-gray-500 mb-8 md:mb-10 leading-relaxed max-w-xl font-light"
          >
            A revolução digital do campo. Compre insumos, máquinas e fertilizantes direto pelo app com a segurança que sua safra merece.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col w-full sm:flex-row gap-3 md:gap-4 sm:w-auto"
          >
            <button className="group bg-black text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-xl shadow-gray-900/10 hover:shadow-2xl hover:shadow-gray-900/20 hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:min-w-[180px] min-h-[48px]">
              <FaGooglePlay size={24} />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-white/60 leading-none mb-0.5">Disponível no</div>
                <div className="text-sm font-bold leading-none">Google Play</div>
              </div>
            </button>
            <button className="group bg-black text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-xl shadow-gray-900/10 hover:shadow-2xl hover:shadow-gray-900/20 hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:min-w-[180px] min-h-[48px]">
              <FaApple size={28} />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-white/60 leading-none mb-0.5">Disponível na</div>
                <div className="text-sm font-bold leading-none">App Store</div>
              </div>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 md:mt-12 flex items-center gap-4 text-sm text-gray-500 font-medium"
          >
            <div className="flex -space-x-3">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white overflow-hidden shadow-sm">
                   <img 
                     src={`https://picsum.photos/seed/producer${i}/100/100`} 
                     alt={`Produtor ${i}`}
                     className="w-full h-full object-cover"
                   />
                 </div>
               ))}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-900 font-bold">4.9/5</span>
              <span className="hidden sm:inline">• +5.000 produtores ativos</span>
            </div>
          </motion.div>
        </div>

        {/* 3D Phone Composition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative block perspective-1000 mt-8 lg:mt-0"
        >
          {/* Main Phone */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 mx-auto w-[260px] md:w-[300px]"
            style={{ transformStyle: "preserve-3d", transform: "rotateY(-5deg) rotateX(5deg)" }}
          >
            <div className="relative bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.2)] md:shadow-[50px_50px_100px_-20px_rgba(0,0,0,0.25)] border-4 border-gray-800 ring-1 ring-white/20">
              {/* Screen */}
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden h-[500px] md:h-[600px] w-full relative">
                {/* App Header */}
                <div className="bg-white p-6 pt-12 pb-4 flex justify-between items-center sticky top-0 z-10">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-agrokapp-green rounded-xl flex items-center justify-center text-agrokapp-text font-bold">A</div>
                     <div>
                       <div className="text-xs text-gray-400 font-bold uppercase">Bem-vindo</div>
                       <div className="font-bold text-gray-900">Fazenda Santa Fé</div>
                     </div>
                   </div>
                   <div className="w-10 h-10 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center overflow-hidden">
                     <img src="https://picsum.photos/seed/user_avatar/100/100" alt="User" className="w-full h-full object-cover" />
                   </div>
                </div>

                {/* Search Bar */}
                <div className="px-6 mb-6">
                  <div className="w-full h-12 bg-gray-50 rounded-2xl border border-gray-100 flex items-center px-4 gap-3 text-gray-400">
                    <SearchIcon />
                    <span className="text-sm">Buscar produtos...</span>
                  </div>
                </div>

                {/* Banner */}
                <div className="px-6 mb-8">
                  <div className="w-full h-40 bg-agrokapp-text rounded-[2rem] relative overflow-hidden flex items-center p-6">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-agrokapp-green rounded-full blur-[40px] opacity-50 translate-x-1/3 -translate-y-1/3"></div>
                    <div className="relative z-10">
                      <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg mb-2 inline-block">NOVIDADE</span>
                      <h3 className="text-white font-display font-bold text-2xl leading-tight mb-2">Ofertas de <br/>Fertilizantes</h3>
                      <div className="w-8 h-8 bg-agrokapp-green rounded-full flex items-center justify-center text-agrokapp-text">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="px-6">
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="font-bold text-gray-900 text-lg">Categorias</h4>
                    <span className="text-xs text-agrokapp-green font-bold">Ver todas</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <div className="w-10 h-10 bg-white rounded-xl mb-3 shadow-sm flex items-center justify-center">
                           <div className="w-6 h-6 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="w-16 h-3 bg-gray-200 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white to-transparent flex items-end justify-center pb-8">
                  <div className="w-1/3 h-1.5 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating Notification Card */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-40 -left-16 bg-white p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 z-30 w-48"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase">Pedido #1024</span>
              </div>
              <div className="font-bold text-gray-900">Confirmado</div>
              <div className="text-xs text-gray-400">Entrega em 2 dias</div>
            </motion.div>

            {/* Floating Price Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-40 -right-12 bg-agrokapp-text p-4 rounded-2xl shadow-xl z-30"
            >
              <div className="text-xs text-gray-400 mb-1">Economia de</div>
              <div className="text-2xl font-bold text-agrokapp-green">R$ 450,00</div>
              <div className="text-[10px] text-gray-500 mt-1">na última compra</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
