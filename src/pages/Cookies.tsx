import { motion } from "motion/react";

export default function Cookies() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-agrokapp-text"
      >
        Política de Cookies
      </motion.h1>
      <div className="prose prose-lg text-gray-600 space-y-6">
        <p>Última atualização: 27 de Fevereiro de 2026</p>
        
        <p>A Agrokapp utiliza cookies para melhorar a sua experiência em nosso site. Esta política explica o que são cookies, como os utilizamos e como você pode gerenciá-los.</p>
        
        <h3 className="text-xl font-bold text-gray-900">O que são cookies?</h3>
        <p>Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem, ou funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.</p>
        
        <h3 className="text-xl font-bold text-gray-900">Como usamos os cookies</h3>
        <p>Utilizamos cookies para entender como você usa nosso site e para personalizar sua experiência. Isso inclui lembrar suas preferências, analisar o tráfego do site e fornecer conteúdo relevante.</p>
      </div>
    </div>
  );
}
