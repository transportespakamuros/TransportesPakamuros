
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dmamynahb/image/upload/v1766469695/trailer2_v2yj6d.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
      </div>

      <div className="container  px-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block py-1 mb-6">
            <span className="text-blue-200 text-[14px] font-semibold tracking-wider uppercase">Líderes en transporte pesado</span>
          </div>
          <h1 className="text-4xl md:text-4xl font-extrabold text-white leading-tight mb-6">
            SEGURIDAD, CALIDAD Y <span className="text-blue-400">PROFESIONALISMO</span>
          </h1>
          <p className="text-md text-blue-100 mb-10 max-w-1xl leading-relaxed">
            Conectamos fronteras y movemos el futuro del país con la flota de tráilers más moderna y segura del mercado. Su carga, nuestra responsabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-md transition-all flex items-center justify-center group shadow-xl hover:shadow-blue-600/20"
            >
              Solicitar Cotización
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicios" 
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-lg font-bold text-md border border-white/20 transition-all text-center"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Stats overlay bottom desktop */}
      <div className="hidden   lg:block absolute bottom-0 left-0 w-1/3 bg-blue-900/10 backdrop-blur-xl px-20 py-12 text-white">
<div className="grid grid-cols-2 gap-4 ">          <div>
            <div className="text-2xl font-bold mb-1 text-blue-400">20+</div>
            <div className="text-sm uppercase tracking-widest text-blue-200 font-medium">Años de experiencia</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1 text-blue-400">500+</div>
            <div className="text-sm uppercase tracking-widest text-blue-200 font-medium">Tráilers operativos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
