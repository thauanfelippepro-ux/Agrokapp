import { motion } from "motion/react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/thauanfelippe.pro@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-agrokapp-text text-center"
      >
        Fale Conosco
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Entre em contato</h3>
          <p className="text-gray-600 mb-8">
            Tem alguma dúvida ou sugestão? Nossa equipe está pronta para te atender.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-agrokapp-green/10 rounded-full flex items-center justify-center text-agrokapp-green">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase">Email</p>
                <p className="font-medium">contato@agrokapp.com.br</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-agrokapp-green/10 rounded-full flex items-center justify-center text-agrokapp-green">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase">Telefone</p>
                <p className="font-medium">55 8113-2766</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-agrokapp-green/10 rounded-full flex items-center justify-center text-agrokapp-green">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase">Endereço</p>
                <p className="font-medium">R. Ten. Jung, 309 - centro, Santo Cristo - RS, 98960-000</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Mensagem Enviada!</h3>
              <p className="text-gray-600">
                Obrigado pelo contato. Nossa equipe retornará em breve.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-4 text-agrokapp-green font-semibold hover:underline"
              >
                Enviar nova mensagem
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="Novo contato via site Agrokapp" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="space-y-4">
                {isError && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2">
                    <AlertCircle size={16} />
                    Ocorreu um erro ao enviar. Tente novamente.
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-agrokapp-green focus:ring-2 focus:ring-agrokapp-green/20 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-agrokapp-green focus:ring-2 focus:ring-agrokapp-green/20 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-agrokapp-green focus:ring-2 focus:ring-agrokapp-green/20 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-agrokapp-green text-white font-bold py-3 rounded-xl hover:bg-agrokapp-green-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
