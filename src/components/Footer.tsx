import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img src="/logo.svg" alt="Agrokapp Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm mb-6">
              A plataforma definitiva para o agronegócio. Conectando quem produz com quem fornece, de forma simples e segura.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-agrokapp-green hover:text-agrokapp-text transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-agrokapp-text mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/sobre" className="hover:text-agrokapp-green transition-colors">Sobre nós</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-agrokapp-text mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/ajuda" className="hover:text-agrokapp-green transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/termos" className="hover:text-agrokapp-green transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-agrokapp-green transition-colors">Privacidade</Link></li>
              <li><Link to="/contato" className="hover:text-agrokapp-green transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-agrokapp-text mb-6">Baixe o App</h4>
            <div className="space-y-3">
              <button className="w-full bg-black text-white px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                 <FaApple size={24} />
                 <div className="text-left">
                   <div className="text-[10px] uppercase font-bold text-white/60">Disponível na</div>
                   <div className="text-sm font-bold">App Store</div>
                 </div>
              </button>
              <button className="w-full bg-black text-white px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                 <FaGooglePlay size={22} />
                 <div className="text-left">
                   <div className="text-[10px] uppercase font-bold text-white/60">Disponível no</div>
                   <div className="text-sm font-bold">Google Play</div>
                 </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Agrokapp Tecnologia Ltda. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/privacidade" className="hover:text-agrokapp-text transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-agrokapp-text transition-colors">Termos</Link>
            <Link to="/cookies" className="hover:text-agrokapp-text transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
