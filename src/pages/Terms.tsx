import { motion } from "motion/react";

export default function Terms() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-agrokapp-text"
      >
        Termos de Uso
      </motion.h1>
      <div className="prose prose-lg text-gray-600 space-y-6">
        <p>Última atualização: 27 de Fevereiro de 2026</p>
        
        <h3 className="text-xl font-bold text-gray-900">1. Aceitação dos Termos</h3>
        <p>Ao acessar e usar a plataforma Agrokapp, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.</p>
        
        <h3 className="text-xl font-bold text-gray-900">2. Uso da Licença</h3>
        <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Agrokapp, apenas para visualização transitória pessoal e não comercial.</p>
        
        <h3 className="text-xl font-bold text-gray-900">3. Isenção de responsabilidade</h3>
        <p>Os materiais no site da Agrokapp são fornecidos 'como estão'. A Agrokapp não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.</p>
      </div>
    </div>
  );
}
