import { motion } from "motion/react";
import { Play, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const tutorials = [
  {
    category: "Para Produtores",
    items: [
      {
        title: "Como criar sua conta de produtor",
        duration: "2 min",
        type: "video"
      },
      {
        title: "Cadastrando sua primeira cotação",
        duration: "4 min",
        type: "video"
      },
      {
        title: "Gerenciando pedidos e entregas",
        duration: "3 min",
        type: "article"
      }
    ]
  },
  {
    category: "Para Lojistas",
    items: [
      {
        title: "Configurando seu catálogo de produtos",
        duration: "5 min",
        type: "video"
      },
      {
        title: "Respondendo a cotações",
        duration: "3 min",
        type: "video"
      },
      {
        title: "Painel financeiro e relatórios",
        duration: "6 min",
        type: "article"
      }
    ]
  }
];

export default function Tutorials() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-agrokapp-green font-bold tracking-wider uppercase text-xs mb-3 block">Central de Conhecimento</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-agrokapp-text mb-6">
          Tutoriais e Guias
        </h1>
        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
          Aprenda a extrair o máximo da Agrokapp com nossos vídeos e artigos passo a passo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {tutorials.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-agrokapp-text mb-6 border-b border-gray-100 pb-4">
              {section.category}
            </h2>
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div key={i} className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-agrokapp-green/30 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.type === 'video' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                      {item.type === 'video' ? <Play size={18} fill="currentColor" /> : <FileText size={18} />}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm group-hover:text-agrokapp-green-dark transition-colors">{item.title}</h3>
                      <span className="text-xs text-gray-400 font-medium">{item.duration} • {item.type === 'video' ? 'Vídeo' : 'Artigo'}</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-agrokapp-green transition-colors" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-8 bg-gray-50 rounded-2xl text-center border border-gray-100">
        <h3 className="text-xl font-bold mb-2">Ainda com dúvidas?</h3>
        <p className="text-gray-500 mb-6">Nossa equipe de suporte está pronta para ajudar.</p>
        <Link to="/contato" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:border-agrokapp-green hover:text-agrokapp-green transition-all shadow-sm">
          Fale com o suporte
        </Link>
      </div>
    </div>
  );
}
