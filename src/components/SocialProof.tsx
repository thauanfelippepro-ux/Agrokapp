import { motion } from "motion/react";
import { Quote, Star, ShieldCheck } from "lucide-react";

const testimonialsRow1 = [
  {
    name: "Carlos Mendes",
    role: "Produtor de Soja - MT",
    image: "https://picsum.photos/seed/carlos/100/100",
    text: "A Agrokapp mudou a forma como compro insumos. Economizei 15% na última safra só comprando pelo app.",
    rating: 5,
  },
  {
    name: "Fernanda Oliveira",
    role: "Gerente da AgroLoja",
    image: "https://picsum.photos/seed/fernanda/100/100",
    text: "Nossas vendas aumentaram 30% nos primeiros 3 meses. A plataforma é muito intuitiva e o suporte é excelente.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Pequeno Produtor - PR",
    image: "https://picsum.photos/seed/roberto/100/100",
    text: "Antes eu perdia dias ligando para lojas. Agora resolvo tudo em minutos. A entrega é garantida.",
    rating: 4,
  },
  {
    name: "Juliana Costa",
    role: "Lojista - GO",
    image: "https://picsum.photos/seed/juliana/100/100",
    text: "A visibilidade que a Agrokapp trouxe para minha loja foi impressionante. Clientes novos toda semana.",
    rating: 5,
  },
  {
    name: "Marcos Souza",
    role: "Produtor de Milho - MS",
    image: "https://picsum.photos/seed/marcos/100/100",
    text: "Ferramenta essencial para quem quer competitividade. Os preços são transparentes e justos.",
    rating: 5,
  },
];

const testimonialsRow2 = [
  {
    name: "Ana Pereira",
    role: "Distribuidora - SP",
    image: "https://picsum.photos/seed/ana/100/100",
    text: "O sistema de gestão de pedidos facilitou muito nossa logística. Recomendo para todos os distribuidores.",
    rating: 5,
  },
  {
    name: "Lucas Santos",
    role: "Agrônomo - MG",
    image: "https://picsum.photos/seed/lucas/100/100",
    text: "Indico para todos os meus clientes. A segurança nas transações é o ponto forte da plataforma.",
    rating: 5,
  },
  {
    name: "Beatriz Lima",
    role: "Lojista - RS",
    image: "https://picsum.photos/seed/beatriz/100/100",
    text: "Consegui girar meu estoque muito mais rápido anunciando na Agrokapp. Ótimo retorno.",
    rating: 4,
  },
  {
    name: "Ricardo Almeida",
    role: "Produtor de Café - MG",
    image: "https://picsum.photos/seed/ricardo/100/100",
    text: "Facilidade e confiança. Encontro tudo o que preciso para a safra em um só lugar.",
    rating: 5,
  },
  {
    name: "Patricia Gomes",
    role: "Gerente Comercial - BA",
    image: "https://picsum.photos/seed/patricia/100/100",
    text: "A plataforma é robusta e muito fácil de usar. O suporte nos ajudou em cada etapa da integração.",
    rating: 5,
  },
];

const partners = ["Bayer", "Syngenta", "John Deere", "Basf", "Corteva"];

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-200 w-[350px] flex-shrink-0 mx-4 transition-colors duration-300 hover:border-gray-300">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{testimonial.role}</p>
      </div>
    </div>
    
    <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light italic">
      "{testimonial.text}"
    </p>

    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={14} 
          className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} 
        />
      ))}
    </div>
  </div>
);

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-16 md:py-32 bg-gray-50 relative overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 80s linear infinite;
        }
      `}</style>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12 md:mb-20 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-agrokapp-green font-bold text-xs uppercase tracking-wider mb-4 md:mb-6 shadow-sm"
          >
            <ShieldCheck size={14} />
            Confiança e Credibilidade
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[24px] md:text-6xl font-display font-bold text-agrokapp-text mb-4 md:mb-6 tracking-tight"
          >
            Quem usa, <span className="text-agrokapp-green">aprova</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            Junte-se a mais de 5.000 produtores e lojistas que estão transformando o agronegócio.
          </motion.p>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-6 md:space-y-8 mb-16 md:mb-24 overflow-hidden">
          {/* Row 1 - Left */}
          <div className="flex overflow-hidden relative w-full group">
            <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
              {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
                <div key={`row1-${index}`} className="bg-white p-6 rounded-2xl border border-gray-200 w-[350px] flex-shrink-0 mx-4 transition-colors duration-300 hover:border-gray-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right */}
          <div className="flex overflow-hidden relative w-full group">
            <div className="flex w-max animate-scroll-reverse group-hover:[animation-play-state:paused]">
              {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
                <div key={`row2-${index}`} className="bg-white p-6 rounded-2xl border border-gray-200 w-[350px] flex-shrink-0 mx-4 transition-colors duration-300 hover:border-gray-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners / Trust Section */}
        <div className="bg-gray-50/50 mt-12 md:mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <p className="text-center text-gray-900 text-sm font-bold uppercase tracking-widest mb-8 opacity-80">Parceiros que confiam na Agrokapp</p>
          </div>
          <div className="flex overflow-hidden relative py-6 border-y border-gray-200">
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <div key={`partner-${index}`} className="relative w-[240px] h-32 flex items-center justify-center border-r border-gray-200 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 bg-gray-50/30 hover:bg-white group">
                  {/* Plus markers - positioned exactly at corners */}
                  <span className="absolute -top-3 -left-1.5 text-gray-400 font-light text-2xl z-10">+</span>
                  <span className="absolute -bottom-4 -left-1.5 text-gray-400 font-light text-2xl z-10">+</span>
                  
                  {/* Logo text */}
                  <span className="text-2xl md:text-3xl font-display font-bold text-gray-400 group-hover:text-agrokapp-text transition-colors cursor-default">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
