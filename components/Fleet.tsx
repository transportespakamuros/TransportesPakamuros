import React from 'react';
import { motion } from "framer-motion";

const fleetImages = [
  '/CargaPesada1.jpg',
  '/CargaPesada2.jpg',
  '/CargaPesada3.jpg',
];

const Fleet: React.FC = () => {
  return (
    <section id="flota" className="py-24 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestra Flota</h2>
            <p className="text-slate-600">
              Invertimos constantemente en tecnología de punta. Todas nuestras unidades están equipadas con sistemas de rastreo satelital y telemetría avanzada para asegurar el óptimo rendimiento de cada viaje.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-blue-700 font-bold bg-blue-50 px-4 py-2 rounded-lg">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Mercedez Benz
             </div>
             <div className="flex items-center gap-2 text-blue-700 font-bold bg-blue-50 px-4 py-2 rounded-lg">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Certificación ISO
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-x-hidden">
          {fleetImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.30 }}
              //className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:bg-blue-100" 
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-sm"
            >
              <img 
                src={src} 
                alt={`Trailer fleet ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-lg">Ver Unidad</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
