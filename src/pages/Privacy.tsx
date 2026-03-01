import { motion } from "motion/react";

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-agrokapp-text"
      >
        Política de Privacidade
      </motion.h1>
      <div className="prose prose-lg text-gray-600 space-y-6">
        <p>Última atualização: 27 de Fevereiro de 2026</p>
        
        <p>A sua privacidade é importante para nós. É política da Agrokapp respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Agrokapp, e outros sites que possuímos e operamos.</p>
        
        <h3 className="text-xl font-bold text-gray-900">Coleta de Informações</h3>
        <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>
        
        <h3 className="text-xl font-bold text-gray-900">Uso de Informações</h3>
        <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos.</p>
      </div>
    </div>
  );
}
