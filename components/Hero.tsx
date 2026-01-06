import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  const texto = "TRANSPORTES PAKAMUROS";
  const [letrasTexto, setLetrasTexto] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setLetrasTexto((prev) => {
        if (prev.length < texto.length) {
          return prev + texto[prev.length]; // usamos la longitud del estado como índice
        } else {
          clearInterval(interval); // terminamos la animación
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval); // limpieza si se desmonta
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dgdt5kcyq/image/upload/v1767585379/trailer2_nn7djt.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/10 bg-gradient-to-r from-blue-900/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
      </div>

      <div className="container px-20 relative z-10">
        <h1 className="text-[25px] md:text-[40px] sm:text-[30px] font-extrabold text-white leading-tight md:mb-6 mb-3">
          BIENVENIDOS A <span className="text-blue-400">{letrasTexto}</span>
        </h1>

        <div className="max-w-3xl">

          <div className="inline-block py-1 md:mb-6 mb-3">
            <span className="text-blue-200 text-[10px] md:text-[14px] font-semibold tracking-wider uppercase">Líderes en transporte pesado</span>
          </div>
          <h1 className=" text-[12px] md:text-[20px] sm:text-[16px]  font-extrabold text-white leading-tight md:mb-6 mb-3">
            SEGURIDAD, CALIDAD Y <span className="text-blue-400">PROFESIONALISMO</span>
          </h1>
          <p className="text-[11px] md:text-[16px] sm:text-[16px] text-blue-100 md:mb-10 mb-4 max-w-1xl leading-relaxed">
            Conectamos fronteras y movemos el futuro del país con la flota de tráilers más moderna y segura del mercado. Su carga, nuestra responsabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="relative overflow-visible bg-blue-600 hover:bg-blue-700 text-white md:px-8 md:py-4 px-3 py-2 rounded-lg font-bold md:text-md text-[14px] transition-all flex items-center justify-center group shadow-xl"
            >
              {/* Ping sutil */}
              <span className="absolute -inset-[-3px] rounded-lg animate-ping bg-blue-500/40 blur-sm"></span>

              {/* Contenido */}
              <span className="relative z-10 flex items-center">
                Solicitar Cotización
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>



            <a 
              href="#servicios" 
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md md:px-8 md:py-4 px-3 py-2  rounded-lg font-bold text-md text-[14px] border border-white/20 transition-all text-center"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
      
        {/* Stats overlay bottom desktop */}
      <div className="hidden   lg:block absolute bottom-0 left-0 w-1/3 bg-blue-900/10 backdrop-blur-xl px-20 py-12 text-white">
          <div className="grid grid-cols-2 gap-4 ">          <div>
            <div className="text-2xl font-bold mb-1 text-blue-400">2+</div>
            <div className="text-sm uppercase tracking-widest text-blue-200 font-medium">Años de experiencia</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1 text-blue-400">5+</div>
            <div className="text-sm uppercase tracking-widest text-blue-200 font-medium">Tráilers operativos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
