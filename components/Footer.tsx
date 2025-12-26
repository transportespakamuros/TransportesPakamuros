
import React from 'react';
import { Truck, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#inicio" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-blue-600 text-white">
                <Truck size={24} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-blue-900">
                TRANS<span className="text-blue-500">LOGÍSTICA</span>
              </span>
            </a>
            <p className="text-slate-500 leading-relaxed">
              Líderes regionales en soluciones de transporte y logística integral. Más de dos décadas moviendo el progreso del país con seguridad y compromiso.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-blue-900 font-bold mb-8 uppercase tracking-widest text-sm">Empresa</h4>
            <ul className="space-y-4">
              {['Sobre Nosotros', 'Nuestra Flota', 'Sostenibilidad', 'Certificaciones', 'Trabaja con Nosotros'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-blue-900 font-bold mb-8 uppercase tracking-widest text-sm">Servicios</h4>
            <ul className="space-y-4">
              {['Transporte de Carga', 'Logística Minera', 'Distribución Urbana', 'Almacenaje Seguro', 'Carga Peligrosa'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-blue-900 font-bold mb-8 uppercase tracking-widest text-sm">Boletín</h4>
            <p className="text-slate-500 mb-6">Suscríbase para recibir actualizaciones y noticias del sector.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="tu@correo.com"
                className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <button className="w-full bg-blue-900 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-all">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} TransLogística del Perú S.A. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-blue-600">Privacidad</a>
            <a href="#" className="hover:text-blue-600">Términos</a>
            <a href="#" className="hover:text-blue-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
