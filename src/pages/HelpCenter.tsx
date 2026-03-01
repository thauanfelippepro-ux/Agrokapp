import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, FileText, ChevronDown, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Como faço para me cadastrar como produtor?",
    answer: "Baixe o app Agrokapp na sua loja de aplicativos, selecione 'Sou Produtor' e siga o passo a passo. Você precisará do seu CPF ou CNPJ e dados da propriedade."
  },
  {
    question: "A Agrokapp cobra taxas sobre as vendas?",
    answer: "Para produtores, o uso da plataforma é gratuito para cotações. Para lojistas, existe uma pequena taxa sobre as transações realizadas através do app."
  },
  {
    question: "Como funciona a entrega dos produtos?",
    answer: "A entrega é combinada diretamente com o fornecedor através do chat da plataforma. Muitos fornecedores já oferecem opções de frete integradas."
  },
  {
    question: "É seguro comprar pela Agrokapp?",
    answer: "Sim! Todos os fornecedores passam por uma verificação rigorosa. Além disso, utilizamos criptografia de ponta para proteger seus dados."
  }
];

export default function HelpCenter() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-agrokapp-green font-bold tracking-wider uppercase text-xs mb-3 block">Suporte</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-agrokapp-text mb-6">
          Como podemos ajudar?
        </h1>
        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
          Encontre respostas para suas dúvidas ou entre em contato com nosso time.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        <Link to="/tutoriais" className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
            <FileText size={24} />
          </div>
          <h3 className="font-bold text-xl mb-2 text-agrokapp-text">Tutoriais e Guias</h3>
          <p className="text-gray-500 text-sm leading-relaxed">Aprenda a usar todas as funcionalidades da plataforma com nossos guias passo a passo.</p>
        </Link>
        
        <Link to="/contato" className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-agrokapp-green mb-6 group-hover:scale-110 transition-transform">
            <Mail size={24} />
          </div>
          <h3 className="font-bold text-xl mb-2 text-agrokapp-text">Fale Conosco</h3>
          <p className="text-gray-500 text-sm leading-relaxed">Não encontrou o que procurava? Envie uma mensagem para nossa equipe de suporte.</p>
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl bg-white overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-agrokapp-text">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
