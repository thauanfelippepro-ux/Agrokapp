import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-agrokapp-text"
      >
        Sobre Nós
      </motion.h1>
      <div className="prose prose-lg text-gray-600">
        <p>
          A Agrokapp nasceu com a missão de transformar o agronegócio brasileiro através da tecnologia.
          Conectamos produtores rurais aos melhores fornecedores do mercado, simplificando processos,
          reduzindo custos e aumentando a eficiência no campo.
        </p>
        <p>
          Acreditamos que a tecnologia deve ser acessível e fácil de usar, permitindo que o produtor foque
          no que realmente importa: produzir alimentos de qualidade para o mundo.
        </p>
      </div>
    </div>
  );
}
