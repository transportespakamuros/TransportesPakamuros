
import React from 'react';
import { Truck, Package, Box, Globe, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Transporte de Carga Pesada',
    desc: 'Contamos con una flota moderna de trailers y camiones de alta capacidad para todo tipo de carga.',
    icon: <Truck className="w-8 h-8" />,
    color: 'bg-blue-600'
  },
  {
    title: 'Logística Especializada',
    desc: 'Servicios adaptados a las necesidades específicas de sectores mineros, industriales y de retail.',
    icon: <Shield className="w-8 h-8" />,
    color: 'bg-blue-700'
  },
  {
    title: 'Almacenaje',
    desc: 'Depósitos modernos con alta seguridad y sistemas de gestión de inventarios en tiempo real.',
    icon: <Box className="w-8 h-8" />,
    color: 'bg-blue-800'
  },
  {
    title: 'Distribución Nacional',
    desc: 'Llegamos a todos los rincones del territorio nacional con puntualidad y control total de ruta.',
    icon: <Globe className="w-8 h-8" />,
    color: 'bg-blue-900'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Lo que hacemos</h2>
          <h3 className="text-4xl font-bold text-blue-900 mb-6">Nuestros Servicios Integrales</h3>
          <p className="text-lg text-slate-600">Ofrecemos soluciones end-to-end para su cadena de suministro, garantizando eficiencia y reducción de costos operativos.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${item.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">
                {item.desc}
              </p>
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Saber más
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
